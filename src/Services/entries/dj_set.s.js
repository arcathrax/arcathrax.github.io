import { Link } from "react-router-dom";
import "./entries.css";

const dj_set = {
    title: "dj set",
    shortDesc: (
        <div>
            <p>
                book an dj set by arcathrax.
            </p>
        </div>
    ),
    description: (
        <div>
            <div className="contactLinks">
                <p>
                    email at:
                </p>
                <Link to={"mailto:arcathrax@proton.me"}>
                    arcathrax@proton.me
                </Link>
            </div>
        </div>
    )
};

export default dj_set;
