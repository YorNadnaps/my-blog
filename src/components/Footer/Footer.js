import React from "react";
import styles from "./Footer.module.scss";
import useToast from "../../hooks/useToast";
import flower from "./flower.png";

const Footer = () => {
	const [input, setInput] = React.useState("");
	const onChange = (e) => {
		setInput(e.target.value);
	};

    const toast = useToast();

    const onClick = () => {
        if (window.Email) {
            window.Email.send({
                SecureToken: 'a75cf89f-fc53-4cb3-9ca8-a5807302cb66',
                To : input,
                From : "yornadnaps@gmail.com",
                Subject : "Welcome to my blog",
                Body : `
                Hello there,<br><br>

                Thanks for visiting my blog site.<br>
                We are happy to have you here and hope you have a good time.<br>
                Thank you for subscribing to our notifications.<br><br>

                With love,<br>
                Team YorNadnaps
                `
            }).then(() =>  {
                setInput('');
                toast.showToast('We\'ve sent you a welcome email.');
            });
        }
        setInput('');
       
    };

	return (
		<div className={styles.footer}>
			<div className={styles.section}>
				<div className={styles.logo}>
					<img className={styles.flowerOfLifeLogo} src={flower} alt="flower" />
					<div className={styles.logoName}>
						<p id="logo-name">Yor</p>
						<br />
						<p id="logo-name">Nadnaps</p>
						<br />
						<p id="catch-phrase">Join the quest to answer- 'Who am I'</p>
					</div>
				</div>
				<div className={styles.subscription}>
					<div className={styles.heading}>Subscribe for latest updates:</div>
					<div className={styles.formContainer}>
						<input
							type="email"
							placeholder="Enter your email"
							className={styles.email}
							value={input}
							onChange={onChange}
						/>
						<button className={styles.submit} onClick={onClick}>Submit</button>
					</div>
				</div>
			</div>
			<div className={styles.disclaimer}>
				&#169; YorNadnaps.&nbsp;All rights reserved.
			</div>
		</div>
	);
};

export default Footer;
