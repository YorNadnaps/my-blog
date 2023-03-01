import React from 'react';
import { Blogs } from '../../config/Blogs';
import styles from './Blog.module.scss';

const Blog = () => {
    return (
        <div className={styles.blog}>
            <div className={styles.headerImage}></div>
            <div className={styles.blogList}>
                <div className={styles.blogHeader}>Posts</div>
                {
                    Blogs.map(({ title, description }) => {
                        return (
                            <div className={styles.blogCard}>
                                <div className={styles.title}>{title}</div>
                                <div className={styles.line}></div>
                                <div className={styles.description}>{description}</div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default Blog;