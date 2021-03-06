import React from "react";
import axios from "axios"; // npm i axios
import { useEffect, useState } from "react";
const Home = () => {
  const [digimons, setDigimons] = useState([]);
  useEffect(() => {
    axios
      .get("https://digimon-api.vercel.app/api/digimon")
      .then((res) => {
        console.log("THE DIGIMON DATA", res.data);
        setDigimons(res.data);
      })
      .catch((err) => console.error("ERROR WITH AXIOS", err.message));
  }, []);

  return (
    <div>
      {digimons.map((digi, index) => (
        <div key="index">
          <h2>{digi.name}</h2>
          <p>level: {digi.level}</p>
          <img src={digi.img} alt="digimon" />
        </div>
      ))}
    </div>
  );
};

export default Home;
