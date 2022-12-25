import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import blogs from "../blog/blog";
import "../style/blog.scss";
import { motion } from "framer-motion";
import observer from "../hooks/observer";

function Blog() {
    const target = useRef(null)

    useEffect(() => {
        observer(target, "0px 0px -30px 0px")
    }, [])


    return (
        <div className="blog__wrapper">
            <div className="blog">
                <div className="blog-containers" ref={target}>
                    {blogs.map((blog) => (
                        <motion.div
                            key={blog.id}
                            className="blog-container"
                            style={{ borderTop: `2px solid ${blog.color}`}}
                            whileHover={{boxShadow: `0px 5px 34px 8px ${blog.color}`}}
                            transition={{duration: 0.3}}
                        >
                            <div
                                className="blog-group"
                                style={{ color: blog.color }}
                            >
                                {blog.group.toUpperCase()}
                            </div>
                            <div className="blog-title">{blog.title}</div>
                            <div className="blog-text">{blog.description}</div>
                        </motion.div>
                    ))}
                </div>
                <div className="blog-link">
                    <Link to="/blog">Посмотреть все статьи</Link>
                </div>
            </div>
        </div>
    );
}

export default Blog;
