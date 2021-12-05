import React from "react";
import styled from "styled-components";

const TodoItemContainer = styled.div`
  background: #fff;
  border-radius: 8px;
  margin-top: 8px;
  padding: 16px;
  position: relative;
  box-shadow: 0 4px 8px grey;
`;

export const getBorderStyleForDate = (starting, current) => {
  starting > new Date(current - 8640000 * 5) ? "none" : "2px solid red";
};

const TodoItemContainerWarning = styled(TodoItemContainer)`
  border-bottom: ${(props) => getBorderStyleForDate(new Date(props.createdAt), Date.now())}
`;

const ButtonsContainer = styled.div`
  position: absolute;
  right: 12px;
  bottom: 30px;
`;

const Button = styled.button`
font-size: 16px;
padding: 8px;
border: none;
border-radius: 15px;
outline: none;
cursor: pointer;
`
const CompletedButton = styled(Button)`
  display: inline-block;
  background-color: rgb(67, 67, 218);
  color: white;
`;

const RemoveButton = styled(Button)`
  display: inline-block;
  background-color: #e93939;
  margin-left: 8px;
  color: white;
`;

export const TodoListItem = ({ todo, onRemovePressed, onCompletedPressed }) => {
  const Container = todo.isCompleted ? TodoItemContainer : TodoItemContainerWarning
  return (
    <Container createdAt={todo.createdAt}>
      <h3>{todo.text}</h3>
      <p>
        Created at: &nbsp;
        {new Date(todo.createdAt).toLocaleDateString()}
      </p>
      <ButtonsContainer>
        {todo.isCompleted ? null : (
          <CompletedButton onClick={() => onCompletedPressed(todo.id)}>
            Mark as Completed
          </CompletedButton>
        )}
        <RemoveButton onClick={() => onRemovePressed(todo.id)}>
          Remove
        </RemoveButton>
      </ButtonsContainer>
    </Container>
  );
};
