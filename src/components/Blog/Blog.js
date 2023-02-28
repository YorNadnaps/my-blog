import React from 'react';
import { Blogs } from '../../config/Blogs';
import styles from './Blog.module.scss';

const Blog = () => {
    return (
        <div className={styles.blog}>
            <div className={styles.headerImage}></div>
            <div className={styles.blogList}>{
                Blogs.forEach(blog => {
                    return (
                        <div>This is a card</div>
                    )
                })
            }</div>
        </div>
    );
};

export default Blog;