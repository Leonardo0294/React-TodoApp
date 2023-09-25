import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Importa los estilos de Bootstrap

export const TodoApp = () => {
  // Estado para almacenar los todos
  const [todos, setTodos] = useState([]);

  // Estado para el nuevo todo
  const [newTodo, setNewTodo] = useState("");

  // Función para añadir un todo
  const addTodo = () => {
    if (newTodo.trim() !== "") {
      setTodos([...todos, { desc: newTodo, completed: false }]);
      setNewTodo("");
    }
  };

  // Función para completar un todo
  const completeTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].completed = true;
    setTodos(updatedTodos);
  };

  return (
    <div className="container">
      {/* Header */}
      <div className="row">
        <div className="col-12">
          <h1>TodoApp</h1>
        </div>
      </div>

      {/* TodoFilter */}
      <div className="row mb-3">
        <div className="col d-flex gap-1">
          <button className="btn btn-sm btn-primary">All</button>
          <button className="btn btn-sm btn-success">Active</button>
          <button className="btn btn-sm btn-danger">Completed</button>
          <button className="btn btn-sm btn-warning">Clear Completed</button>
        </div>
      </div>

      {/* TodoAdd */}
      <div className="row mb-3">
        <div className="col-sm-12 col-md-4 mb-2 mb-md-3 mb-lg-0">
          <h3>New Todo</h3>
          <input
            type="text"
            className="form-control"
            placeholder="Add Todo"
            name="desc"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                addTodo();
              }
            }}
          />
        </div>

        {/* TodoList */}
        <div className="col-sm-12 col-md-8">
          <h3>Todo List</h3>
          <ul className="list-unstyled">
            {todos.map((todo, index) => (
              <li key={index}>
                {todo.completed ? <del>{todo.desc}</del> : todo.desc}
                {!todo.completed && (
                  <button
                    className="btn btn-sm btn-success ms-2"
                    onClick={() => completeTodo(index)}
                  >
                    Complete
                  </button>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
