import React from 'react';
import { Blogs } from '../../config/Blogs';
import { useNavigate } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';
import styles from './Blog.module.scss';

const Blog = () => {
    const navigate = useNavigate();

    useTitle('Blog');
    const onCardClick = (path) => {
        const pathComponents = path.split('/');
        const blogId = pathComponents[1].split('.')[0]; /** This is because paths are of type: 'blogs/blogX.md' */
        navigate(`/blog/${blogId}`);
    }

    return (
        <div className={styles.blog}>
            <div className={styles.headerImage}></div>
            <div className={styles.blogList}>
                <div className={styles.blogHeader}>Posts</div>
                {
                    Blogs.map(({ id, path, title, description }) => {
                        return (
                            <div key={id} className={styles.blogCard} onClick={() => onCardClick(path)}>
                                <div className={styles.title}>{title}</div>
                                <div className={styles.line}></div>
                                <div className={styles.description}>{description}</div>
                            </div>
                        )
                    })
                }
            </div>
            <div className={styles.boxContainer}>
                <div className={styles.header}>The 3 phases of transformation</div>
                <div className={styles.wrapper}>
                    <div className={styles.box1}><span>1.</span><div id="quote">This is quote 1</div></div>
                    <div className={styles.box2}><span>2.</span><div id="quote">This is quote 1</div></div>
                    <div className={styles.box3}><span>3.</span><div id="quote">This is quote 1</div></div>
                </div>
            </div>
        </div>
    );
};

export default Blog;