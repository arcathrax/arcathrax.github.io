import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer()
{
    return(
        <div className="footerDiv">
            <Link className="footerLink" to={"https://github.com/ivanpollak"} target="blank">
                <img className="footerIcon" src={require("./Icons/github.png")} />
            </Link>
        </div>
    )
}

export default Footer;