import "./Imprint.css";
import React, { useEffect } from "react";
import {Link} from "react-router-dom";

function Imprint()
{
    useEffect(() => {
        document.title = "Arcathrax - imprint"
    }, [])
    return(
        <div>
            <h1>
                imprint
            </h1>
            <div>
                <Link to={"mailto:arcathrax@proton.me"}>
                    arcathrax@proton.me
                </Link>
                <p>
                    Weidenweg 2
                </p>
                <p>
                    8492 Wila
                </p>
                <p>
                    Schweiz
                </p>
            </div>
        </div>
    )
}

export default Imprint;