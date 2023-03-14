import React from "react";
import Markdown from 'markdown-to-jsx';
import axios from 'axios';
import styles from "./BlogPost.module.scss";
import { useLocation } from "react-router-dom";

const BlogPost = () => {
	const [data, setData] = React.useState("");
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(null);
    const { state } = useLocation();

	React.useEffect(() => {
        const headers = {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET,POST,PATCH,OPTIONS"
        };
        setLoading(true);
        axios.get("http://localhost:8081/getBlogPosts", {
            headers,
            params: {
                path: state.path
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
	}, [state]);

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
            <h1 className={styles.title}>{state.title}</h1>
            <Markdown>
                {data}
            </Markdown>
        </div>
	);
};

export default BlogPost;
