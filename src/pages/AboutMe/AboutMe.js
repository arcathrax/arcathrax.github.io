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
                <img className={"memeFooterImg"} src={require("./under_construction.png")} alt={"under construction"} />
                <img className={"memeFooterImg"} src={require("./under_construction_2.png")} alt={"under construction 2"} />
            </div>
        </div>
    )
}

export default AboutMe;