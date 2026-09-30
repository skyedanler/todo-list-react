import { useState } from "react";

export default function TodoForm(props) {
  const [todoItem, setTodoItem] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!todoItem.trim()) {
      setError("Please enter a TODO item.");
      return;
    }
    if (todoItem.trim().length < 3) {
      setError("TODO item needs to be at least 3 characters.");
      return;
    }

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
      <div id="error-message" className="error-message" role="alert">
        {error}
      </div>
    </form>
  );
}
