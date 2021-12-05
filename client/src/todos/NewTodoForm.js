import React, { useState } from "react";
import  './NewTodoForm.css';
import { addTodoRequest } from "./thunks";
import { connect } from "react-redux";

const NewTodoForm = ({ todos, onCreatePressed }) => {
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
      <button onClick={()=> { 
          const isDuplicateText = todos.some(todo=> todo.text === inputValue)  
          if (!isDuplicateText) {
            onCreatePressed(inputValue); 
            setinputValue('');
          } 
          }} 
          className="new-todo-button">
              Create Todo
    </button>
    </div>
  );
};

const mapStateToProps = state => ({
    todos: state.todos,
});

const mapDispatchToProps = dispatch => ({
    onCreatePressed: text => dispatch(addTodoRequest(text))
});

export default connect(mapStateToProps, mapDispatchToProps)(NewTodoForm);