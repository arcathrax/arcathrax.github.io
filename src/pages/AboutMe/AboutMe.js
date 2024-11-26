import "./AboutMe.css";
import React, { useEffect } from "react";

function AboutMe()
{
    useEffect(() => {
        document.title = "Arcathrax - about me"
    }, [])
    return(
        <div>
            <h1>
                about me
            </h1>
            <div>
                <p>
                    under construction
                </p>
            </div>
        </div>
    )
}

export default AboutMe;