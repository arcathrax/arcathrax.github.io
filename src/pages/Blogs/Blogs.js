import { Link } from "react-router-dom";
import blogEntry from "../../components/ProjectEntry/BlogEntry";
import "./Blogs.css"
import { useEffect } from "react";

function Blogs() {
    useEffect(() => {
        document.title = "Arcathrax - Blogs"
    }, [])
    return (
        <div>
            <h1>
                Blog Posts
            </h1>
            <div className="infoBarBlogs">
                Click on a post to expand it.
            </div>
            <div className="blogListDiv">
                <blogEntry
                    title="ExoDist"
                    shortDesc={
                    <div>
                        A introduction to my audio plugin.
                    </div>
                    }
                    description={
                    <div>
                    </div>
                    }
                />
            </div>
        </div>
    )
}

export default Blogs;