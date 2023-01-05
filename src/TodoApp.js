import React, { useState } from "react";

function TodoApp() {
  // LOGICA
  const [title, setTitle] = useState("");
  const [todos, setTodos] = useState([]);

  function handleClick(e) {
    e.preventDefault();
    setTitle();
  }

  function handleChange(event) {
    const value = event.target.value;
    setTitle(value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const newTodo = {
      id: crypto.randomUUID(),
      title: title,
      completed: true,
    };
    setTodos([...todos, setTodos])
  }

  // RENDER
  return (
    <div className="container">
      <form className="createForm" onSubmit={handleSubmit}>
        <input className="todoInput" value={title} onChange={handleChange} />
        <input
          className="bottonCreate"
          type="submit"
          value="Create Todo"
          onClick={handleClick}
        />
      </form>
      {title}
    </div>
  );
}

export { TodoApp };
