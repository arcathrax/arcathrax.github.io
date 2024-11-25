import "./Imprint.css";
import React, { useEffect } from "react";

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