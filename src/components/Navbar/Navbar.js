import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <div className={"navbarMainDiv"}>
            <div>
                <Link to={"/"}>
                    <h1>
                        arcathrax
                    </h1>
                </Link>
            </div>
            <div className={"navbarLinksDiv"}>
                <Link to={"/downloads"}>
                    <h3>
                        downloads
                    </h3>
                </Link>
            </div>
        </div>
    );
}

export default Navbar;
