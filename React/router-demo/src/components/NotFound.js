import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      404 NotFound
      <br />
      <Link to="/">Go Back Home</Link>
    </div>
  );
};

export default NotFound;
