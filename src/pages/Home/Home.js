import { useEffect } from "react";
import "./Home.css";
import { Link } from "react-router-dom";

function Home() {
  useEffect(() => {
    document.title = "Arcathrax - home";
  }, []);
  return (
    <div>
      <h1>home</h1>
      <h2>music</h2>
      <iframe
        src="https://open.spotify.com/embed/artist/0XnWXq7lfhJqrmwtmxUkcm?utm_source=generator&theme=0"
        width="100%"
        height="352"
        frameBorder="0"
        allowFullScreen=""
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
        title={"spotify iframe"}
      ></iframe>

      <h2>dates</h2>
      <div>
        <Link
          to="https://www.instagram.com/p/DEcxWilNYcw/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
          target={"_blank"}
        >
          10.1.2025 - gradient collective, umbo
        </Link>
      </div>
      <div>
        <Link
          to="https://www.instagram.com/p/DA5n8pwipjW/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==/"
          target="_blank"
        >
          30.11.2024 - technoabteil, mäx
        </Link>
      </div>

      <h2>bookings</h2>
      <Link to="mailto:arcathrax@proton.me">arcathrax@proton.me</Link>
    </div>
  );
}

export default Home;
