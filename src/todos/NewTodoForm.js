import React, { useState } from "react";
import  './NewTodoForm.css';

export const NewTodoForm = () => {
  const [inputValue, setinputValue] = useState("");
  return (
    <div className="new-todo-form">
      <input
        className="new-todo-input"
        type="text"
        value={inputValue}
        onChange={(e) => setinputValue(e.target.value)}
        placeholder='New Todo'
      />
      <button className="new-todo-button">Create Todo</button>
    </div>
  );
};
