import React, { useState } from "react";
import Todo from "./Todo";

function TodoApp() {
  // STATES
  const [title, setTitle] = useState("");
  const [todos, setTodos] = useState([]);

  // FUNCTIONS
  function handleChange(event) {
    const value = event.target.value;
    setTitle(value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const newTodo = {
      id: crypto.randomUUID(),
      title: title,
      completed: false,
    };

    // Hago una copia de lo que tengo en todos
    const temp = [...todos];
    // Le agrego el nuevo todo al principio
    temp.unshift(newTodo);

    setTodos(temp);
  }

  function handleUpdate(id, value){
    const temp = [...todos]
    const item = temp.find(item => item.id === id)
    item.title = value
    setTodos(temp)
  }

  // RENDER
  return (
    <div className="todoContainer">
      <form className="createForm" onSubmit={handleSubmit}>
        <input className="todoInput" value={title} onChange={handleChange} />
        <input
          className="bottonCreate"
          type="submit"
          value="Create Todo"
          onClick={handleSubmit}
        />
      </form>
      <div className="todosContainer">
        {todos?.map((item) => (
          <Todo item={item} key={item.id} onUpdate={handleUpdate}/>
        ))}
      </div>
    </div>
  );
}

export { TodoApp };
