import React from 'react';

export function TodoList({ todos, setTodos }) {
  
  const toggleCompleted = (id) => {
    const toggled = todos.map((todo) =>
      todo.id === id
        ? {
            ...todo,
            completed: !todo.completed,
          }
        : todo
    );
    setTodos(toggled);
  };

  return (
    <div className="col-sm-12 col-md-8">
      <h3>Todo List</h3>

      <ul className="list-unstyled">
        {todos.length === 0 ? (
          <li className="rounded-3 p-3 text-black text-center fs-6 bg-info-subtle">
            No hay tareas pendientes
          </li>
        ) : (
          todos.map((todo) => {
            const text = todo.completed ? "Completado" : "Completar";
            const btnClass = todo.completed ? "btn btn-primary" : "btn btn-danger";
            const bgClass = todo.completed ? "alert alert-success" : "alert alert-warning";
            return (
              <li
                key={todo.id}
                className={`d-flex justify-content-between gap-3 ${bgClass} p-3`}
              >
                <span className="text-body-emphasis fs-6">{todo.title}</span>
                <button
                  onClick={() => toggleCompleted(todo.id)}
                  className={btnClass}
                >
                  {text}
                </button>
              </li>
            );
          })
        )}
      </ul>
    </div>
  );
}
