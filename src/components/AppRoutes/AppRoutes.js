import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Home/Home";
import About from "../About/About";
import Blog from "../Blog/Blog";
import Contact from "../Contact/Contact";
import BlogPost from "../BlogPost/BlogPost";

const AppRoutes = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/about" element={<About />} />
			<Route path="/blog" element={<Blog />} />
			<Route path="/contact" element={<Contact />} />
            <Route path="/blog/:id" element={<BlogPost />} />
		</Routes>
	);
};

export default AppRoutes;
