import "./App.css";
import Person from "./components/Person";

function App() {
  const person = [
    {
      id: 1,
      name: "Joe Schmoe",
      age: 109,
      hair: "purple",
    },
    {
      id: 2,
      name: "Hally Berry",
      age: 40,
      hair: "strawberry",
    },
    {
      id: 1,
      name: "Bob Marley",
      age: 70,
      hair: "dreads",
    },
    {
      id: 1,
      name: "Hulk",
      age: 37,
      hair: "black",
    },
  ];
  return (
    <div className="App">
      {person.map((person, index) => (
        <Person person={person} key={person.id} />
      ))}
    </div>
  );
}

export default App;
