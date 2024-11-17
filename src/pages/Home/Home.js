import { useEffect } from "react";
import "./Home.css";

function Home()
{
    useEffect(() => {
        document.title = "Arcathrax - Homepage"
    }, [])
    return(
        <div>
            <h1>
                Home
            </h1>
        </div>
    )
}

export default Home;