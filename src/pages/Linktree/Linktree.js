import "./Linktree.css";
import React, { useEffect } from "react";
import {Link} from "react-router-dom";

function Linktree()
{
    useEffect(() => {
        document.title = "Arcathrax - linktree"
    }, [])
    return(
        <div className="linktreeDiv">
            <Link className={"linktreeLink"} to={"https://www.instagram.com/arcathrax/"} target={"_blank"}>
                instagram
            </Link>

            <Link className={"linktreeLink"}
                  to={"https://open.spotify.com/intl-de/artist/0XnWXq7lfhJqrmwtmxUkcm?si=qJXqjLL2Q6aSkTDRp9qaLg"}
                  target={"_blank"}>
                spotify
            </Link>

            <Link className={"linktreeLink"} to={"https://music.apple.com/us/artist/arcathrax/1734394950"} target={"_blank"}>
                apple music
            </Link>

            <Link className={"linktreeLink"} to={"https://www.tiktok.com/@arcathrax"} target="blank">
                tiktok
            </Link>

            <Link className={"linktreeLink"} to={"https://arcathrax.bandcamp.com/"} target="blank">
                bandcamp
            </Link>

            <Link className={"linktreeLink"} to={"https://arcathrax.gumroad.com/"} target={"_blank"}>
                gumroad
            </Link>
        </div>
    )
}

export default Linktree;