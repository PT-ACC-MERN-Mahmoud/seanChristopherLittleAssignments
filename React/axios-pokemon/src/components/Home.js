import React from "react";
import axios from "axios"; // npm i axios
import { useEffect, useState } from "react";

const Home = (props) => {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=807&offset=0")
      .then((res) => {
        setPokemon(res.data.results);
      })
      .catch((err) => console.error("ERROR WITH AXIOS", err.message));
  }, []);

  return (
    <div>
      {pokemon.map((pokemon, index) => (
        <div key="index">
          <h2>{pokemon.name}</h2>
          {/* <img src={pokemon.sprites.front_default} alt={pokemon.name} /> */}
        </div>
      ))}
    </div>
  );
};

export default Home;
