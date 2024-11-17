import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
    const location = useLocation();

    // Funktion, um die aktive Klasse zu setzen
    const getActiveClass = (path) => (location.pathname === path ? "navbarLink active" : "navbarLink");

    return (
        <div className="mainNavbarDiv">
            {/* Title */}
            <Link to="/">
                <h1>Ivan Pollak</h1>
            </Link>

            {/* Links */}
            <div className="linksNavbarDiv">
                <Link className={getActiveClass("/")} to="/">
                    Home
                </Link>

                <Link className={getActiveClass("/blog-posts")} to="/blog-posts">
                    Blog Posts
                </Link>

                <Link className={getActiveClass("/about-me")} to="/about-me">
                    About Me
                </Link>
            </div>
        </div>
    );
}

export default Navbar;
