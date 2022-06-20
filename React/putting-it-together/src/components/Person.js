import { useState } from "react";

const Person = (props) => {
  const { person } = props;
  const [age, setAge] = useState(person.age);
  //   const updateAge = () => {
  //     const newAge = 1;
  //     setAge(age + newAge);
  //   };
  return (
    <div>
      <h2>{person.name}</h2>
      <p>Age: {age}</p>
      <p>Hair: {person.hair}</p>
      <br />
      <button onClick={(e) => setAge(age + 1)}>
        Birthday Button for {person.name}
      </button>
    </div>
  );
};

export default Person;
