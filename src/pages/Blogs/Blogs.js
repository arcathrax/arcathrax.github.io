import React, { useEffect } from "react";
import BlogEntry from "../../components/BlogEntry/BlogEntry";
import "./Blogs.css";
import blogs from "../../Blog";

function Blogs() {
    useEffect(() => {
        document.title = "Arcathrax - Blog";
    }, []);

    return (
        <div>
            <h1>blog</h1>
            <div className="infoBarService">Click on a service to expand it.</div>
            <div className="ServicesListDiv">
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
