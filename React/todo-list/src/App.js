import "./App.css";
import Todo from "./components/Todo";
import TodoForm from "./components/TodoForm";
import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);

  return (
    <div className="App">
      <TodoForm todos={todos} setTodos={setTodos} />

      <Todo todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
