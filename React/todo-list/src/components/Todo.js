import React from "react";

const Todo = (props) => {
  const { todos, setTodos } = props;

  const handleChecked = (item, completed) => {
    const newList = todos.map((todo) => {
      if (todo.id === item.id) {
        return { ...todo, completed: completed };
      } else {
        return todo;
      }
    });
    setTodos(newList);
  };

  const handleDelete = (todo) => {
    const filteredTodos = todos.filter((t) => t.id !== todo.id);
    setTodos(filteredTodos);
  };
  return (
    <div>
      {todos.map((todo) => (
        <div className={todo.completed ? "completed" : ""}>
          <h2>{todo.name}</h2>
          <p>{todo.description}</p>
          <p>{todo.due}</p>
          <br />
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={(e) => handleChecked(todo, e.target.checked)}
          />
          <button onClick={() => handleDelete(todo)}>Delete Todo</button>
        </div>
      ))}
    </div>
  );
};

export default Todo;
