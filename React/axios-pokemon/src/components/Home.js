import React from "react";
import axios from "axios"; // npm i axios
import { useEffect, useState } from "react";
const Home = () => {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=807")
      .then((res) => {
        setPokemon(res.data);
      })
      .catch((err) => console.error("ERROR WITH AXIOS", err.message));
  }, []);

  return (
    <div>
      {pokemon.map((poke, index) => (
        <div key="index">
          <h2>{poke.name}</h2>
          <img src={poke.front_default} alt={poke.name} />
        </div>
      ))}
    </div>
  );
};

export default Home;
