import { TodoListItem } from './TodoListItem'
import { NewTodoForm } from './NewTodoForm';
import './TodoList.css'
import React from 'react';

const TodoList = ({ todos = [{text: 'hey'}] }) => (
  <div className="list-wrapper">
    <NewTodoForm/>
    {todos.map((todo) => (
      <TodoListItem todo={todo} />
    ))}
  </div>
);

export default TodoList