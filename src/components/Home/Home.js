import React from "react";
import styles from "./Home.module.scss";
import Badge from "../Badge/Badge";
import BlogSection from "../BlogSection/BlogSection";
import Feedback from "../Feedback/Feedback";
import Footer from "../Footer/Footer";

const OFFSET_MULTIPLIER = 0.0975;
const useHome = function (firstQuoteScrollHandler, secondQuoteScrollHandler) {
	React.useEffect(() => {
		const appElement = document.getElementById("app");
		appElement.addEventListener("scroll", firstQuoteScrollHandler);
		appElement.addEventListener("scroll", secondQuoteScrollHandler);

		return () => {
			appElement.removeEventListener("scroll", firstQuoteScrollHandler);
			appElement.removeEventListener("scroll", secondQuoteScrollHandler);
		};
	}, [firstQuoteScrollHandler, secondQuoteScrollHandler]);
};

export const Home = () => {
	const firstQuoteRef = React.useRef();
	const secondQuoteRef = React.useRef();

	const firstQuoteScrollHandler = (e) => {
		const { scrollTop: offset } = e.target;
		if (firstQuoteRef.current) {
			firstQuoteRef.current.style.left = `${100 - offset * OFFSET_MULTIPLIER}%`;
		}
	};

	const secondQuoteScrollHandler = (e) => {
		const { scrollTop: offset } = e.target;
		if (secondQuoteRef.current) {
			secondQuoteRef.current.style.right = `${
				100 - offset * OFFSET_MULTIPLIER
			}%`;
		}
	};

    const FIRST_QUOTE = 'The sovereignty of one’s self over one’s self is called Liberty';
    const SECOND_QUOTE = 'It\'s all in the mind!';

    React.useEffect(() => {
        const appElement = document.getElementById("app");
        const { scrollTop } = appElement;
        if (firstQuoteRef.current) {
            firstQuoteRef.current.style.left = `${100 - scrollTop * OFFSET_MULTIPLIER}%`;
        }

        if (secondQuoteRef.current) {
            secondQuoteRef.current.style.right = `${100 - scrollTop * OFFSET_MULTIPLIER}%`;
        }
    }, []);

    useHome(firstQuoteScrollHandler, secondQuoteScrollHandler);
	return (
		<div className={styles.home}>
			<div className={styles.homePageBannerContainer}>
				<Badge />
			</div>
			<div className={styles.quote}>
				<q className={styles.firstQuote} ref={firstQuoteRef}>{FIRST_QUOTE}</q>
				<q className={styles.secondQuote} ref={secondQuoteRef}>{SECOND_QUOTE}</q>
			</div>
			<BlogSection />
			<Feedback />
			<Footer />
		</div>
	);
};

export default Home;
