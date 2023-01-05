import React, { useState } from "react";

function Todo({ item }) {
  // STATES
  const [isEdit, setIsEdit] = useState(false);

  // FUNCTIONS
  function FormList() {
    return (
      <form>
        <input type="text" />
        <button>Update</button>
      </form>
    );
  }

  function TodoElement() {
    return (
      <div className="todoInfo">
        {item.title}
        <button onClick={() => {setIsEdit(true)}}>Edit</button>
        <button>Delete</button>
      </div>
    );
  }

  // RENDER
  return (
    <div className="todo">{isEdit ? <div>Modo Editar</div> : TodoElement}</div>
  );
}

export default Todo;
