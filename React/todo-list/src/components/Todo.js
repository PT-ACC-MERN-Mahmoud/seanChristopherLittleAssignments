import React from "react";

const Todo = (props) => {
  const { todo, todos, setTodos } = props;

  const handleDelete = () => {
    const filteredTodos = todos.filter((t) => t.id !== todo.id);
    setTodos(filteredTodos);
  };
  return (
    <div>
      <h2>{todo.name}</h2>
      <p>{todo.description}</p>
      <p>{todo.date}</p>
      <br />

      <button onClick={handleDelete}>Delete Todo</button>
    </div>
  );
};

export default Todo;
