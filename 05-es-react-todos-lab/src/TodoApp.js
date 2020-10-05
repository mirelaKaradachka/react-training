import React, { useState } from "react";
import MOCK_TODOS from "./mock-todos";
import "./TodoApp.css";
import TodoFilter from "./TodoFilter";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

export const TodoApp = (props) => {
  const [state, setState] = useState({
    todos: MOCK_TODOS,
    filter: undefined,
  });

  const handleCreateTodo = (todo) => {
    setState((state) => ({ todos: state.todos.concat(todo) }));
  };

  const handleDeleteTodo = (todo) => {
    setState((state) => ({
      todos: state.todos.filter((currentTodo) => currentTodo.id !== todo.id),
    }));
  };

  const handleStatusChange = (todo) => {
    setState((state) => ({
      todos: state.todos.map((currentTodo) =>
        currentTodo.id === todo.id ? todo : currentTodo
      ),
    }));
  };

  const handleFilterChange = (event) => {
    const statusFilter = event.target.value;
    const filteredArr = state.todos.filter(
      (todo) =>
        statusFilter && statusFilter.toString() === todo.status.toString()
    );
    setState({ ...state, todos: filteredArr });
  };

  return (
    <div className="App-header">
      <h2>React TODOS Demo</h2>
      <TodoFilter filter={state.filter} onFilterChange={handleFilterChange} />
      <TodoInput onCreateTodo={handleCreateTodo} />
      <TodoList
        todos={state.todos}
        onChangeStatus={handleStatusChange}
        onDelete={handleDeleteTodo}
      />
    </div>
  );
};
