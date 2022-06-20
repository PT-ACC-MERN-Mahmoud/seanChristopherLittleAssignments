import React from "react";

//a parent component is any component that calls another component from inside their own return statement
const ParentComponent = (props) => {
  return (
    <div>
      <ChildComponent firstName={"Fifty"} lastName={"Cent"} />
    </div>
  );
};

//React will automatically create a javascript object from "props" using the attributes
//we added when we called the ChildComponent in our ParentComponent
const ChildComponent = (props) => {
  return (
    <p>
      Hello my name is {props.firstName} {props.lastName}
    </p>
  );
};

//Props in this example would look like this:
//props = {
//firstName: 'Fifty',
//lastName: 'Cent'
//}
