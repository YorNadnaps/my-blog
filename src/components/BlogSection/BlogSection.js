import React from "react";
import { useNavigate } from "react-router-dom";
import { Blogs } from "../../config/Blogs";
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
				{Blogs.map((props) => {
					return <Card key={props.id} {...props} />;
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
                        console.log(entry);
                        if (entry.boundingClientRect.top > 50) {
                            entry.target.classList.toggle(
                                styles.headerAnimate,
                                entry.isIntersecting
                            );
                        }
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
			rootMargin: "-50px",
			threshold: 0,
		});

		const element = document.querySelector(`.${selector}`);
		observer.observe(element);
		return () => {
			observer.disconnect();
		};
	}, [selector, callback]);

	return null;
};

const Card = ({ id, title, description, estimatedTime, publishDate, path }) => {
    const navigate = useNavigate();
    const onClick = () => {
        navigate(`/blog/${id}`, {
            state: {
                path,
                title
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
			<div className={styles.footer}>{publishDate} | {estimatedTime}</div>
		</div>
	);
};
