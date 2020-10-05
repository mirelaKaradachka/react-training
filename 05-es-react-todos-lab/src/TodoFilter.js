import React from "react";
import PropTypes from "prop-types";

const TodoFilter = (props) => {
  const { filter, onFilterChange } = props;

  return (
    <div>
      <select value={filter} onChange={onFilterChange}>
        <option value="">All</option>
        <option value={0}>Active</option>
        <option value={1}>Completed</option>
        <option value={2}>Canceled</option>
      </select>
    </div>
  );
};

TodoFilter.propTypes = {
  filter: PropTypes.string,
  onFilterTodo: PropTypes.func,
};

export default TodoFilter;
