import React from "react";
import "./Footer.css";
import {Link, useLocation} from "react-router-dom";

function Footer()
{
    const location = useLocation();
    const getActiveClass = (path) => (location.pathname === path ? "navbarLink active" : "navbarLink");

    return(
        <div className="footerDiv">
            <div className="footerLinksDiv">
                <Link className="footerLink" to={"https://www.instagram.com/arcathrax/"} target="blank">
                    <img className="footerIcon" src={require("./Icons/instagram.png")} alt="Instagram Link" />
                </Link>

                <Link className="footerLink" to={"https://open.spotify.com/intl-de/artist/0XnWXq7lfhJqrmwtmxUkcm?si=qJXqjLL2Q6aSkTDRp9qaLg"} target="blank">
                    <img className="footerIcon" src={require("./Icons/spotify.png")} alt="Spotify Link" />
                </Link>

                <Link className="footerLink" to={"https://music.apple.com/us/artist/arcathrax/1734394950"} target="blank">
                    <img className="footerIcon" src={require("./Icons/apple-music.png")} alt="Apple Music Link" />
                </Link>

                <Link className="footerLink" to={"https://www.tiktok.com/@arcathrax"} target="blank">
                    <img className="footerIcon" src={require("./Icons/tik-tok.png")} alt="TikTok Link" />
                </Link>

                <Link className="footerLink" to={"https://arcathrax.bandcamp.com/"} target="blank">
                    <img className="footerIcon" src={require("./Icons/bandcamp.png")} alt="Bandcamp Link" />
                </Link>

                <Link className="footerLink" to={"https://arcathrax.gumroad.com/"} target="blank">
                    <img className="footerIcon" src={require("./Icons/gumroad.png")} alt="Gumroad Link" />
                </Link>
            </div>

            <div className={"footerInfoLinkDiv"}>
                <Link className={"footerInfoLink"} to="/imprint">
                    imprint
                </Link>
            </div>
        </div>
    )
}

export default Footer;