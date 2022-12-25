import React from "react";
import blogs from "../../blog/blog";
import "./style/blogPage.scss";
import { motion } from "framer-motion";

function BlogPage() {
    return (
        <div className="blog__wrapper-page">
            <div className="blog">
                <div className="blog-containers">
                    {blogs.map((blog) => (
                        <motion.div
                            key={blog.id}
                            className="blog-container-page"
                            style={{ borderTop: `2px solid ${blog.color}` }}
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
            </div>
        </div>
    );
}

export default BlogPage;
