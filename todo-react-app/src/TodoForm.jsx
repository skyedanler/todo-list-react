import { useState } from "react";

export default function TodoForm(props) {
  const [todoItem, setTodoItem] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    props.addTodo(todoItem);
  };

  const handleChange = (event) => {
    setTodoItem(event.target.value);
  };

  return (
    <form id="todo-form" className="todo-form" onSubmit={handleSubmit}>
      <div className="input-group">
        <input
          type="text"
          id="todo-input"
          placeholder="Enter a new todo..."
          required
          aria-label="New todo item"
          value={todoItem}
          onChange={handleChange}
        />
        <button type="submit" className="add-btn">
          Add Todo
        </button>
      </div>
      <div id="error-message" className="error-message" role="alert"></div>
    </form>
  );
}
