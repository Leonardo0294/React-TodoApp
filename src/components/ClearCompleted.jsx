import React from "react";

export function clearCompleted({ todos, setTodos }) {
  const handleClearCompleted = () => {
    const incompleteTodos = todos.filter((todo) => !todo.completed);
    setTodos(incompleteTodos);
  };

  return (
    <button className="btn btn-outline-danger" onClick={handleClearCompleted}>
      Clear Completed
    </button>
  );
}
