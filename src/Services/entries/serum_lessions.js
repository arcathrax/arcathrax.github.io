import {Link} from "react-router-dom";
import "./entries.css";

const serum_presets = {
    title: "serum lessions",
    shortDesc: (
        <div>
            <p>
                unlock the full potential of serum
                with personalized lessons by arcathrax.
                learn sound design and
                production techniques to take your music to the next level.
            </p>
        </div>
    ),
    description: (
        <div>
            <p>
                master the art of sound design with serum
                through one-on-one lessons tailored to your needs.
                whether you're a beginner looking to learn the basics
                or an advanced producer aiming to refine your skills,
                i’ll guide you through creating custom sounds,
                understanding serum’s features,
                and applying practical techniques for professional results.
                each session is hands-on,
                ensuring you leave with both knowledge and
                new sounds for your productions.
                let’s make your music stand out!
            </p>

            <p>
                contact me trough this email if you are interested:
            </p>
            <Link to={"mailto:arcathrax@proton.me"}>
                arcathrax@proton.me
            </Link>
        </div>
    )
};

export default serum_presets;