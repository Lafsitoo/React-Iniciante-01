import React, { useState } from "react";

function Todo({ item, onUpdate }) {
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
    function handleClickUpdateToto(){
      onUpdate(item.id, newValue)
      setIsEdit(false)
    }
    return (
      <form className="todoUpdateForm" onSubmit={handleSubmit}>
        <input
          type="text"
          className="todoInput"
          value={newValue}
          onChange={handleChange}
        />
        <button className="botton" onClick={handleClickUpdateToto}>Update</button>
      </form>
    );
  }

  function TodoElement() {
    return (
      <div className="todoInfo">
        {item.title}
        <button
          onClick={() => {
            setIsEdit(true);
          }}
        >
          Edit
        </button>
        <button>Delete</button>
      </div>
    );
  }

  // RENDER
  return <div className="todo">{isEdit ? <FormList /> : <TodoElement />}</div>;
}

export default Todo;
