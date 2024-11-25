import {Link} from "react-router-dom";
import "./entries.css";

const serum_presets = {
    title: "serum presets",
    shortDesc: (
        <div>
            <p>
                Elevate your tracks with cutting-edge Serum presets,
                meticulously crafted by arcathrax.
                Perfect for producers seeking fresh,
                high-quality sounds to inspire creativity across any genre.
            </p>
        </div>
    ),
    description: (
        <div>
            <p>
                My Serum preset collection offers
                an array of meticulously designed sounds,
                from lush pads and rich basses to
                intricate leads and dynamic effects.
                Each preset is optimized for maximum usability
                and designed to provide a professional touch to your productions.
                Whether you're a beginner or an advanced producer,
                these presets are perfect for adding depth,
                energy, and uniqueness to your music.
                Dive in and transform your sound today!
            </p>

            <p>
                get my presets trough the following link:
            </p>
            <Link to={"https://arcathrax.gumroad.com/"} target={"_blank"}>
                arcathrax.gumroad.com
            </Link>
        </div>
    )
};

export default serum_presets;