import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Badge.module.scss";

const useBadge = function (onAppScroll) {
    React.useEffect(() => {
		const appElement = document.getElementById("app");
		appElement.addEventListener("scroll", onAppScroll);

		return () => {
			appElement.removeEventListener("scroll", onAppScroll);
		};
	}, [onAppScroll]);
};

const Badge = () => {
	const homePageBannerBadgeRef = React.useRef();
	const aboutButtonRef = React.useRef();
    const navigate = useNavigate();

    const OFFSET_MULTIPLIER = 0.12;
	const onAppScroll = (e) => {
		if (homePageBannerBadgeRef.current) {
			homePageBannerBadgeRef.current.style.transform = `translateY(${
				-50 + e.target.scrollTop*OFFSET_MULTIPLIER
			}%)`;
		}
	};
	
    useBadge(onAppScroll);
	const onClickAbout = (e) => {
        e.preventDefault();
        
		const ripple = document.createElement("span");
		ripple.classList.add(styles.ripple);

		if (aboutButtonRef.current) {
			aboutButtonRef.current.appendChild(ripple);
		}

		setTimeout(() => {
			ripple.remove();
		}, 720);

        setTimeout(() => {
            navigate('/about');
        }, 450);
	};

	return (
		<div className={styles.homePageBannerBadge} ref={homePageBannerBadgeRef}>
			<div className={styles.persona}>SR</div>
			<div className={styles.horizontalLine}></div>
			<div className={styles.nameTag}>
				<b>S</b>pandan <b>R</b>oy
			</div>
			<div className={styles.locationTag}>Bangalore, India</div>
			<a
				className={styles.about}
				onClick={onClickAbout}
				ref={aboutButtonRef}
				href='href__overridden_in_click_handler'
			>
				About
			</a>
		</div>
	);
};

export default Badge;
