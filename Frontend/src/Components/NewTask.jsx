import React, { useState, useEffect } from "react";
import Display from "./Display";

function NewTask() {
  const [value, setValue] = useState("");
  const [todos, setTodos] = useState();

  async function getTodos() {
    const response = await fetch("http://localhost:3000/get", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const result = await response.json();
    setTodos(result.data);
  }

  useEffect(() => {
    getTodos();
  }, [todos]);

  async function handleclick() {
    if (value) {
      const response = await fetch("http://localhost:3000/post", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          value: value,
        }),
      });

      todos.push(value);
      setValue("");
      const result = await response.json(); // assuming the response is in JSON format
    } else {
      alert("Enter something");
    }
  }

  return (
    <div className="input-group flex-nowrap">
      <span className="input-group-text" id="addon-wrapping">
        Create New Task
      </span>
      <br />
      <input
        id="input"
        onChange={(e) => setValue(e.target.value)}
        type="text"
        className="form-control"
        value={value}
        aria-label="Username"
        aria-describedby="addon-wrapping"
      />
      <button type="button" className="btn btn-primary" onClick={handleclick}>
        Add
      </button>
      <Display todos={todos} />
    </div>
  );
}

export default NewTask;
