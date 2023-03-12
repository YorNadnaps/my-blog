import React from "react";
import useTitle from "../../hooks/useTitle";
import styles from "./Contact.module.scss";

const Contact = () => {
	const [name, setName] = React.useState();
	const [email, setEmail] = React.useState();
	const [message, setMessage] = React.useState();

	const onSubmit = (e) => {
		e.preventDefault();
	};

    useTitle('Contact');
	return (
		<div className={styles.contact}>
			<div className={styles.description}>
				<div className={styles.image}></div>
				<div className={styles.touch}>Contact us</div>
			</div>
			<div className={styles.form}>
				<form className={styles.box} onSubmit={onSubmit} autoComplete="off">
					<div className={styles.name}>
						<label htmlFor="name">
							Name<b>*</b>
						</label>
						<input
							type="text"
							id="name"
                            name="name"
							autoComplete="off"
							role="presentation"
							value={name}
							onChange={(e) => setName(e.target.value)}
                            placeholder="Enter your name"
						/>
					</div>
					<div className={styles.email}>
						<label htmlFor="email">
							Email<b>*</b>
						</label>
						<input
							type="email"
							id="email"
                            name="email"
							autoComplete="off"
							role="presentation"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
						/>
					</div>
					<div className={styles.message}>
						<label htmlFor="message">
							Message<b>*</b>
						</label>
						<textarea
                            id="message"
                            name="message"
							value={message}
							onChange={(e) => setMessage(e.target.value)}
                            placeholder="Enter your message"
						></textarea>
					</div>
					<input type="submit" />
				</form>
			</div>
		</div>
	);
};

export default Contact;
