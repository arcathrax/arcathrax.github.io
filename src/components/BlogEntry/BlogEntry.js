import React, { useState } from "react";
import "./BlogEntry.css";

function BlogEntry({ category, title, shortDesc, description }) {
    const [showDescription, setShowDescription] = useState(false);

    const showFullDescription = (event) => {
        event.stopPropagation();
        setShowDescription(true);
    };

    const hideFullDescription = (event) => {
        event.stopPropagation();
        setShowDescription(false);
    };

    return (
        <div
            className="BlogEntryDiv"
            onClick={showFullDescription}
            style={showDescription ? { cursor: "auto" } : { cursor: "pointer" }}
        >
            <h2>{title}</h2>
            <div>
                {shortDesc}
                {showDescription && <p className="description">{description}</p>}
            </div>
            {showDescription && (
                <div className="hideButtonDiv">
                    <div className="hideButton" onClick={hideFullDescription}>
                        hide description
                    </div>
                </div>
            )}
        </div>
    );
}

export default BlogEntry;
