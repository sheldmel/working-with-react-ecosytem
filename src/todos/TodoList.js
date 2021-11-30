import { TodoListItem } from './TodoListItem'
import { connect } from 'react-redux';
import NewTodoForm from './NewTodoForm';
import { removeTodo, completeTodo } from './actions';
import './TodoList.css'
import React from 'react';

const TodoList = ({ todos = [], onRemovePressed, onCompletedPressed }) => (
  <div className="list-wrapper">
    <NewTodoForm/>
    {todos.map((todo) => (
      <TodoListItem todo={todo} onRemovePressed={onRemovePressed} onCompletedPressed={onCompletedPressed}/>
    ))}
  </div>
);

const mapStateToProps = state =>({
    todos: state.todos
});

const mapDispatchToProps = dispatch =>({
    onRemovePressed: text => dispatch(removeTodo(text)),
    onCompletedPressed: text => dispatch(completeTodo(text))
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)