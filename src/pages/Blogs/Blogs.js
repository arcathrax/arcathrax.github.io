import { Link } from "react-router-dom";
import BlogEntry from "../../components/ProjectEntry/BlogEntry";
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
                <BlogEntry
                    category="Audio plugin"
                    title="ExoDist"
                    date={"17.11.2024"}
                    shortDesc={
                    <div>
                        <p>
                            A introduction to my audio plugin.
                        </p>
                    </div>
                    }
                    description={
                    <div>
                    </div>
                    }
                />
                <BlogEntry
                    category="Producing"
                    title="Where to start"
                    date={"15.11.2024"}
                    shortDesc={
                    <div>
                        <p>
                            A beginners guide to start producing.
                        </p>
                    </div>
                    }
                    description={
                    <div>
                        <p>

                        </p>
                    </div>
                    }
                />
                <BlogEntry
                category="Sound design"
                title="Anatomy of a kick"
                date={"20.11.2024"}
                shortDesc={
                    <div>
                        <p>
                            A tutorial on how to creating kicks.
                        </p>
                    </div>
                }
                description={
                    <div>
                        <p>

                        </p>
                    </div>
                }
                />
            </div>
        </div>
    )
}

export default Blogs;