import React, { useEffect } from "react";
import BlogEntry from "../../components/BlogEntry/BlogEntry";
import "./Blogs.css";
import blogs from "../../blogs";

function Blogs() {
    useEffect(() => {
        document.title = "My Blog - Blog Posts";
    }, []);

    return (
        <div>
            <h1>Blogs</h1>
            <div className="infoBarBlogs">Click on a blog to expand it.</div>
            <div className="BlogsListDiv">
                {blogs.map((blog, index) => (
                    <BlogEntry
                        key={index}
                        category={blog.category}
                        title={blog.title}
                        shortDesc={blog.shortDesc}
                        description={blog.description}
                    />
                ))}
            </div>
        </div>
    );
}

export default Blogs;
