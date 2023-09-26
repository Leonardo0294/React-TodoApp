import React, { useState } from "react";
import { AddTodo } from "../components/AddTodo";
import { TodoList } from "../components/TodoList";
import { clearCompleted } from "../components/clearCompleted"; 
import "bootstrap/dist/css/bootstrap.min.css";

export const TodoApp = () => {
  // Logic for storing todos
  const [todos, setTodos] = useState([]);

  // Function to clear completed tasks
  const handleClearCompleted = () => {
    const incompleteTodos = todos.filter((todo) => !todo.completed);
    setTodos(incompleteTodos);
  };

  return (
    <div className="container mt-5">
      {/* Header */}
      <div className="row">
        <div className="col-12 text-center">
          <h1 className="display-4 mb-4" style={{ fontFamily: "Arial, sans-serif", color: "#4CAF50" }}>
            TodoApp
          </h1>
        </div>
      </div>

      {/* TodoFilter */}
      <div className="row mt-3">
        <div className="col d-flex justify-content-center">
          <button className="btn btn-outline-primary me-2">All</button>
          <button className="btn btn-outline-success me-2">Active</button>
          <button className="btn btn-outline-danger me-2" onClick={handleClearCompleted}>Clear Completed</button>
        </div>
      </div>

      {/* TodoList */}
      <div className="row mt-4">
        <div className="col-md-6 offset-md-3">
          <AddTodo setTodos={setTodos} todos={todos} />
          <TodoList todos={todos} setTodos={setTodos} />
        </div>
      </div>
    </div>
  );
};
