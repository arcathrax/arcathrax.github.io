import { useState, useEffect } from "react";
import "./Prayers.css";
import prayers from "./prayers.json";

function Prayers()
{
  const [prayer, setPrayer] = useState("");

  useEffect(() => {
      const randomIndex = Math.floor(Math.random() * prayers.length);
      setPrayer(prayers[randomIndex]);
    }, []);

  return (
    <div>
      {prayer}
    </div>
  );
}

export default Prayers;
