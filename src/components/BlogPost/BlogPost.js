import React from "react";
import Markdown from 'markdown-to-jsx';
import axios from 'axios';
import styles from "./BlogPost.module.scss";
import { useLocation } from "react-router-dom";

const BlogPost = () => {
	const [data, setData] = React.useState("");
    const [loading, setLoading] = React.useState(true);
    const { state } = useLocation();

	React.useEffect(() => {
        const headers = {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET,POST,PATCH,OPTIONS"
        };
        setLoading(true);
        axios.get("http://localhost:9090/getBlogPosts", {
            headers,
            params: {
                path: state.path
            }
        })
            .then((response) => {
                setData(response.data);
                setLoading(false);
            }).catch(console.error);
	}, [state]);

    if (loading) {
        return (
            <div className={styles.loading}>
                <div className={styles.spinner} />
            </div>
        );
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
