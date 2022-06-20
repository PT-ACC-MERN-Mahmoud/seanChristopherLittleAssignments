import React from "react";

const Person = (props) => {
  return (
    <div>
      <h2>
        My name is {props.firstName} {props.lastName}
      </h2>
    </div>
  );
};

export default Person;
