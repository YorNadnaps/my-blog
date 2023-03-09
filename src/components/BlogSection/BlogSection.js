import React from "react";
import { useNavigate } from "react-router-dom";
import { BlogSectionCardsConfig } from "../../config/BlogSectionCardsConfig";
import styles from "./BlogSection.module.scss";

const BlogSection = () => {
	const buttonRef = React.useRef();
	const headerRef = React.useRef();

	const navigate = useNavigate();

	const onReadMorePosts = (e) => {
		e.preventDefault();

		if (buttonRef.current) {
			buttonRef.current.classList.add(styles.readMoreClicked);
		}
        
        const readText = document.querySelector(`.${styles.readText}`);
		readText.classList.add(styles.readTextClicked);
		setTimeout(() => {
			readText.remove();
		}, 550);

        const tick = document.querySelector(`.${styles.tick}`);
        tick.classList.add(styles.tickClicked);
		setTimeout(() => {
			navigate("/blog");
		}, 1500);
	};
	return (
		<div className={styles.blogSection}>
			<div className={styles.header} ref={headerRef}>
				Featured Posts
			</div>
			<div className={styles.cardGrid}>
				{BlogSectionCardsConfig.map(({ id, title, description }) => {
					return <Card id={id} title={title} description={description} />;
				})}
			</div>
			<div className={styles.more}>
				<div
					className={styles.readMore}
					ref={buttonRef}
					onClick={onReadMorePosts}
				>
					<div className={styles.readText}>Read more</div>
                    <span className={styles.tick}></span>
				</div>
			</div>
			<Observer
				selector={styles.header}
				callback={(entries) => {
					entries.forEach((entry) => {
						entry.target.classList.toggle(
							styles.headerAnimate,
							entry.isIntersecting
						);
					});
				}}
			/>
		</div>
	);
};

export default BlogSection;

/**
 * Creating a separate component for intersection observer so that:
 * Observer is mounted only when DOM elements are mounted.
 */
const Observer = ({ selector, callback }) => {
	React.useEffect(() => {
		const observer = new IntersectionObserver((entries) => callback(entries), {
			root: null,
			rootMargin: "-100px",
			threshold: 0.18,
		});

		const element = document.querySelector(`.${selector}`);
		observer.observe(element);
		return () => {
			observer.disconnect();
		};
	}, [selector, callback]);

	return null;
};

const Card = ({ id, title, description }) => {
    const navigate = useNavigate();
    const onClick = () => {
        navigate('/blog/P3Y4vmFpfa76z5Twmdsv', {
            state: {
                path: 'blogs/blog.md'
            }
        });
    };

	return (
		<div key={id} className={styles.card}>
			<div className={styles.description}>
				<span className={styles.content}>{description}</span>
				<button className={styles.readArticle} onClick={onClick}>Read more</button>
			</div>
			<div className={styles.cardTitle}>{title}</div>
			<div className={styles.footer}>Nov 01, 2007 | 5 min read</div>
		</div>
	);
};
