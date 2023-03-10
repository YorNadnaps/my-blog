import React from 'react';
import { Blogs } from '../../config/Blogs';
import { useNavigate } from 'react-router-dom';
import styles from './Blog.module.scss';

const Blog = () => {
    const navigate = useNavigate();
    const onCardClick = (id, path, title) => {
        navigate(`/blog/${id}`, {
            state: {
                path,
                title
            }
        });
    }
    return (
        <div className={styles.blog}>
            <div className={styles.headerImage}></div>
            <div className={styles.blogList}>
                <div className={styles.blogHeader}>Posts</div>
                {
                    Blogs.map(({ id, path, title, description }) => {
                        return (
                            <div className={styles.blogCard} onClick={() => onCardClick(id, path, title)}>
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