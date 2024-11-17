import React, { useState } from "react";
import "./BlogEntry.css";

function BlogEntry({ title, description, shortDesc }) {
    const [showDescription, setShowDescription] = useState(false);

    // Funktion zum Umschalten
    const showFullDescription = (event) => {
        event.stopPropagation();
        setShowDescription(true);

    };

    const hideFullDescription = (event) => {
        event.stopPropagation();
        setShowDescription(false);
    };

    return (
        <div className="ProjectEntryDiv" onClick={showFullDescription} style={showDescription ? { cursor: "auto" } : { cursor: "pointer" }}
>
            <h2>{title}</h2>
            <div>
                {shortDesc}
                {showDescription && (
                    <p className="description">{description}</p>
                )}
            </div>
            {showDescription && (
                <div className="hideButton" onClick={hideFullDescription}>
                    Hide description
                </div>
            )}
        </div>
    );
}

export default BlogEntry;
