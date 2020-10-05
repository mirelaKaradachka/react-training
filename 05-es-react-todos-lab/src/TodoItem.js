import React from "react";
import { CANCELED, COMPLETED, TodoStatus } from "./todo.model";
import "./TodoItem.css";
export const TodoItem = (props) => {
  const { todo, onChangeStatus, onDelete } = props;
  const handleDelete = () => {
    onDelete(todo);
  };
  const handleChangeStatus = (status) => {
    const updatedTodo = { ...todo, status };
    onChangeStatus(updatedTodo);
  };
  return (
    <div className="TodoItem">
      <span className="TodoItem-text">
        <span className="TodoItem-id"> {todo.id}</span>
        {todo.text}
      </span>
      <div>
        <span> {TodoStatus[todo.status]}</span>
        {props.todo.status !== COMPLETED ? (
          <button
            onClick={() => handleChangeStatus(COMPLETED)}
            text="Complete state"
          >
            Complete
          </button>
        ) : null}
        {props.todo.status !== CANCELED ? (
          <button onClick={() => handleChangeStatus(CANCELED)}>Cancel</button>
        ) : null}
        <button onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
};
