import React from "react";
import Markdown from 'markdown-to-jsx';
import axios from 'axios';
import styles from "./BlogPost.module.scss";
import { useParams } from "react-router-dom";
import { Blogs } from "../../config/Blogs";

const BlogPost = () => {
	const [data, setData] = React.useState("");
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(null);

    const params = useParams();
    const currentPath = `blogs/${params.id}.md`;
    const currentBlogConfig = Blogs.find(blog => blog.path === currentPath);

	React.useEffect(() => {
        const headers = {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET,POST,PATCH,OPTIONS"
        };
        setLoading(true);
        axios.get("/getBlogPosts", {
            headers,
            params: {
                path: currentPath
            }
        })
            .then((response) => {
                setData(response.data);
            }).catch(err => {
                console.log(err);
                if (err?.response?.data) {
                    setError(err.response.data);
                } else {
                    setError(err);
                }
            }).finally(() => {
                setLoading(false);
            });
	}, [currentPath]);

    if (loading) {
        return (
            <div className={styles.loading}>
                <div className={styles.spinner} />
            </div>
        );
    }

    if (error) {
        return (
            <div className={styles.loading}>
                <div className={styles.error}>{error}</div>
            </div>
        )
    }

	return (
		<div className={styles.blogPost}>
            <h1 className={styles.title}>{currentBlogConfig.title}</h1>
            <Markdown>
                {data}
            </Markdown>
        </div>
	);
};

export default BlogPost;
