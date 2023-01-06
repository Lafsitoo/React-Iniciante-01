import React, { useState } from "react";
import "./todoApp.css"

function Todo({ item, onUpdate, onDelete }) {
  // STATES
  const [isEdit, setIsEdit] = useState(false);

  // FUNCTIONS
  function FormList() {
    // STATES
    const [newValue, setNewValue] = useState(item.title);
    // FUNCTIONS
    function handleSubmit(e) {
      e.preventDefault();
    }
    function handleChange(event) {
      const value = event.target.value;
      setNewValue(value);
    }
    function handleClickUpdateToto() {
      onUpdate(item.id, newValue);
      setIsEdit(false);
    }
    return (
      <form className="todoUpdateForm" onSubmit={handleSubmit}>
        <input
          type="text"
          className="todoInput"
          value={newValue}
          onChange={handleChange}
        />
        <button className="botton" onClick={handleClickUpdateToto}>
          Update
        </button>
      </form>
    );
  }

  function TodoElement() {
    return (
      <div className="todoInfo">
        <span className="todoTitle">{item.title}</span>
        <button
          className="bottonEdit"
          onClick={() => {
            setIsEdit(true);
          }}
        >
          Edit
        </button>
        <button className="bottonDelete" onClick={(event) => onDelete(item.id)}>
          Delete
        </button>
      </div>
    );
  }

  // RENDER
  return <div className="todo">{isEdit ? <FormList /> : <TodoElement />}</div>;
}

export default Todo;
