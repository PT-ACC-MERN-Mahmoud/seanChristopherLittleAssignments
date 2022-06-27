import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import List from "./components/List";
import Box from "./components/Box";

function App() {
  const [boxArray, setBoxArray] = useState([]);
  return (
    <div className="App">
      <Form boxArray={boxArray} setBoxArray={setBoxArray} />
      <List boxArray={boxArray} />
    </div>
  );
}

export default App;
