import { useEffect } from "react";
import "./Home.css";
import {Link} from "react-router-dom";

function Home()
{
    useEffect(() => {
        document.title = "Arcathrax - home"
    }, [])
    return(
        <div>
            <h1>
                home
            </h1>
            <h2>
                music
            </h2>
            <iframe
                src="https://open.spotify.com/embed/artist/0XnWXq7lfhJqrmwtmxUkcm?utm_source=generator&theme=0"
                width="100%" height="352" frameBorder="0" allowFullScreen=""
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy" title={"spotify iframe"}>
            </iframe>
            <h2>
                dates
            </h2>
            <Link to="https://www.ticketcorner.ch/artist/maex-zuerich-parties/technoabteil-x-maex-3747510/"
                  target="_blank">
                30.11.2024 - Technoabteil
            </Link>
        </div>
    )
}

export default Home;