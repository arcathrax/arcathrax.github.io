import React, { useState } from "react";
import "./BlogEntry.css";

function BlogEntry({ category, title, date, content, shortDesc }) {
    const [showContent, setShowContent] = useState(false);

    // Funktion zum Umschalten
    const showFullContent = (event) => {
        event.stopPropagation();
        setShowContent(true);

    };

    const hideFullContent = (event) => {
        event.stopPropagation();
        setShowContent(false);
    };

    return (
        <div className="ProjectEntryDiv" onClick={showFullContent} style={showContent? { cursor: "auto" } : { cursor: "pointer" }}
>
            <h2>{category} - {title}</h2>
            <div>
                {shortDesc}
                {showContent && (
                    <p className="content">
                        {content}
                        {date}
                    </p>
                )}
            </div>
            {
                showContent && (
                <div className="hideButton" onClick={hideFullContent}>
                    Hide content
                </div>
            )}
        </div>
    );
}

export default BlogEntry;
