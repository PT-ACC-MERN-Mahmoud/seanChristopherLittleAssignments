import React from "react";
import { useState, useEffect } from "react";
import { v4 } from "uuid";

const TodoForm = (props) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [due, setDue] = useState("");
  const { todos, setTodos } = props;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && description && due) {
      const todo = {
        id: v4(),
        name: name,
        description: description,
        due: due,
      };
      setTodos([todo, ...todos]);
    } else {
      alert("Please fill out all fields");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        height: "300px",
        width: "30%",
        margin: "0 auto",
      }}
    >
      <label htmlFor="name">Name: </label>
      <input
        type="text"
        id="name"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      {name && name.length < 5 && (
        <p style={{ color: "red" }}>Todo name must be at least 5 characters.</p>
      )}
      <label htmlFor="description">Description: </label>
      <input
        type="text"
        id="description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      {description && description.length < 5 && (
        <p style={{ color: "red" }}>
          Description must be at least 5 characters.
        </p>
      )}
      <label htmlFor="due">Due: </label>
      <input
        type="date"
        id="due"
        value={due}
        onChange={(e) => setDue(e.target.value)}
      />
      <input type="submit" />
    </form>
  );
};

export default TodoForm;
