import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
    const location = useLocation();
    const getActiveClass = (path) => (location.pathname === path ? "navbarLink active" : "navbarLink");

    return (
        <div className="mainNavbarDiv">
            {/* Title */}
            <Link to="/">
                <h1>
                    arcathrax
                </h1>
            </Link>

            {/* Links */}
            <div className="linksNavbarDiv">
                <Link className={getActiveClass("/")} to="/">
                    home
                </Link>

                <Link className={getActiveClass("/blog")} to="/blog">
                    blog
                </Link>

                <Link className={"navbarLink"} to="https://arcathrax.gumroad.com/" target="blank">
                    presets
                </Link>

                <Link className={getActiveClass("/about-me")} to="/about-me">
                    about me
                </Link>
            </div>
        </div>
    );
}

export default Navbar;