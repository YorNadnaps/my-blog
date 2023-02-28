import React from "react";
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
				<input type="submit" className={styles.submit} />
			</form>
		</div>
	);
};

export default Feedback;
