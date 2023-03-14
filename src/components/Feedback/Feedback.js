import React from "react";
import axios from 'axios';
import useToast from "../../hooks/useToast";
import styles from "./Feedback.module.scss";

const useFeedback = function (onScroll) {
	React.useEffect(() => {
		const appElement = document.getElementById("app");
		appElement.addEventListener("scroll", onScroll);

		return () => {
			appElement.removeEventListener("scroll", onScroll);
		};
	}, [onScroll]);
};

const Feedback = () => {
	const [name, setName] = React.useState("");
	const [message, setMessage] = React.useState("");
    const [isSending, setIsSending] = React.useState(false);
    const toast = useToast();

	const ball1 = React.useRef();
	const ball2 = React.useRef();

	const OFFSET_MULTIPLIER = 0.021;
	const onAppScroll = (e) => {
		const { scrollTop: offset } = e.target;
		if (ball1.current) {
			ball1.current.style.left = `${10 + offset * OFFSET_MULTIPLIER}%`;
		}
		if (ball2.current) {
			ball2.current.style.right = `${3 + offset * OFFSET_MULTIPLIER}%`;
		}
	};
	useFeedback(onAppScroll);

	const onSubmit = (e) => {
		e.preventDefault();
        setIsSending(true);

        console.log(`
        ------------------------------------------
            Following is the data you've entered:
            - Name: ${name}
            - Message: ${message}
        ------X----------------------------X------
        `);

        setName('');
        setMessage('');

        const headers = {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET,POST,PATCH,OPTIONS"
        };
        
        axios.get('http://localhost:9090/sendHowYouFeel', {
            headers,
            params: {
                doc: {
                    Name: name,
                    Message: message
                }
            }
        }).then((response) => {
            console.log(response);
            toast.showToast('Message sent...')
        }).catch(err => {
            console.error(err);
            toast.showToast('Failed to send message.');
        }).finally(() => {
            setIsSending(false);
        })
	};
	return (
		<div className={styles.feedback}>
			<div className={styles.ball1} ref={ball1} />
			<div className={styles.ball2} ref={ball2} />

			<div className={styles.image} />
			<h1 className={styles.header}>Let us know how you feel!</h1>
			<div className={styles.subHeader}>
				We'd love to know more about you...
			</div>
			<form className={styles.form} onSubmit={onSubmit}>
				<div className={styles.name}>
					<label htmlFor="name">
						Name<span>*</span>
					</label>
					<input
						type="text"
						id="name"
						placeholder="Enter your name"
						value={name}
						name="name"
						onChange={(e) => setName(e.target.value)}
                        autoComplete="off"
					/>
				</div>
				<div className={styles.message}>
					<label htmlFor="message">
						Message<span>*</span>
					</label>
					<textarea
                        id="message"
						placeholder="Enter your message"
						value={message}
						name="message"
						onChange={(e) => setMessage(e.target.value)}
					></textarea>
				</div>
                <div className={styles.submitContainer}>
                    <input type="submit" className={styles.submit} />
                    {isSending && <div className={styles.lds_ripple}><div></div><div></div></div>}
                </div>
			</form>
		</div>
	);
};

export default Feedback;
