import { Link } from "react-router-dom";
import "./AboutMe.css";
import { useEffect } from "react";

function AboutMe()
{
    useEffect(() => {
        document.title = "Arcathrax - About Me"
    }, [])
    return(
        <div>
            <h1>
                About Me
            </h1>

            <div className="contactLinks">
                <Link to={"mailto:arcathrax@proton.me"}>
                Contact Me
                </Link>
            </div>
        </div>
    )
}

export default AboutMe;