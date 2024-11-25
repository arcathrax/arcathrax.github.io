import {Link} from "react-router-dom";
import "./entries.css";

const serum_presets = {
    title: "serum lessions",
    shortDesc: (
        <div>
            <p>
                Unlock the full potential of Serum
                with personalized lessons by arcathrax.
                Learn sound design and
                production techniques to take your music to the next level.
            </p>
        </div>
    ),
    description: (
        <div>
            <p>
                Master the art of sound design with Serum
                through one-on-one lessons tailored to your needs.
                Whether you're a beginner looking to learn the basics
                or an advanced producer aiming to refine your skills,
                I’ll guide you through creating custom sounds,
                understanding Serum’s features,
                and applying practical techniques for professional results.
                Each session is hands-on,
                ensuring you leave with both knowledge and
                new sounds for your productions.
                Let’s make your music stand out!
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