import React from "react";
import { useParams, Link } from "react-router-dom";

const Math = () => {
  const { a, b } = useParams();
  console.log("WHAT IS THE TYPE OF A&B", typeof a, typeof b);
  return (
    <div>
      {a} + {b} = {Number(a) + Number(b)}
      <br />
      <Link to={"/"}>Go Home</Link>
    </div>
  );
};

export default Math;
