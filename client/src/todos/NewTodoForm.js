import React, { useState } from "react";
import styled from "styled-components";
import { getTodos, getTodosLoading } from "./selectors";
import { addTodoRequest } from "./thunks";
import { connect } from "react-redux";

const FormContainer = styled.div`
  border-radius: 8px;
  padding: 16px;
  text-align: center;
  box-shadow: 0 4px 8px grey;
`;
const InputContainer = styled.input`
  font-size: 16px;
  padding: 8px;
  border: none;
  border-bottom: 2px solid #ddd;
  border-radius: 8px;
  width: 70%;
  outline: none;
`;
const NewInputButton = styled.button`
  font-size: 16px;
  padding: 8px;
  border: none;
  border-radius: 15px;
  outline: none;
  cursor: pointer;
  margin-left: 8px;
  width: 20%;
  color: white;
  background-color: rgb(67, 67, 218);
`;

const NewTodoForm = ({ todos, onCreatePressed }) => {
  const [inputValue, setinputValue] = useState("");
  return (
    <FormContainer>
      <InputContainer
        type="text"
        value={inputValue}
        onChange={(e) => setinputValue(e.target.value)}
        placeholder="New Todo"
      />
      <NewInputButton
        onClick={() => {
          const isDuplicateText = todos.some(
            (todo) => todo.text === inputValue
          );
          if (!isDuplicateText) {
            onCreatePressed(inputValue);
            setinputValue("");
          }
        }}
      >
        Create Todo
      </NewInputButton>
    </FormContainer>
  );
};

const mapStateToProps = (state) => ({
  todos: getTodos(state),
});

const mapDispatchToProps = (dispatch) => ({
  onCreatePressed: (text) => dispatch(addTodoRequest(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewTodoForm);
