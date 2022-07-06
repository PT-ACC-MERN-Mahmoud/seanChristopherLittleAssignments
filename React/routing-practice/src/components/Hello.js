import React from "react";
import { useParams, Link } from "react-router-dom";

const Hello = () => {
  const { a, b } = useParams();

  const helloDetails = {
    color: a,
    backgroundColor: b,
  };

  return (
    <div>
      <h1 style={helloDetails}>Hello!</h1>
      <br />
      <Link to={"/"}>Go Home</Link>
    </div>
  );
};

export default Hello;
