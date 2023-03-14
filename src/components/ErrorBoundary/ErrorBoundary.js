import React from "react";
import styles from "./ErrorBoundary.module.scss";
import RouterHOC from "../../RouterHOC/RouterHOC";

class ErrorBoundary extends React.Component {
	constructor(props) {
		super(props);
		this.state = { hasError: false, error: "", errorInfo: "" };
	}

	componentDidCatch(error, errorInfo) {
		console.error("-------Error Found-------");
		console.error(">>> Error: ", error);
		console.error(">>> Error Info: ", errorInfo);

		this.setState({ error, errorInfo });
	}

	render() {
        const onClick = () => {
            this.props.router.navigate('/');
            window.location.reload();
        }
		if (this.state.errorInfo) {
			const { error, errorInfo } = this.state;
			return (
				<div className={styles.errorBoundary}>
					<h1>Something went wrong!</h1>
					<div>
						&gt;&gt;&gt; <b>Error:</b>{" "}
						<pre>{JSON.stringify(error, null, 4)}</pre>
					</div>
					<div>
						&gt;&gt;&gt; <b>Error Info:</b>{" "}
						<pre>{JSON.stringify(errorInfo, null, 4)}</pre>
					</div>
					<div className={styles.goHomeButton}>
						<button className={styles.navLink} onClick={onClick}>
							Go Home
						</button>
					</div>
				</div>
			);
		}

		return this.props.children;
	}
}

export default RouterHOC(ErrorBoundary);