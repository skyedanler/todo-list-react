import "./TodoItem.css";

export default function TodoItem(props) {
  const deleteThisTodo = () => {
    props.handleDelete(props.todo.id);
  };

  return (
    <div className="todo-item">
      <label htmlFor="todo" className="todo-text">
        <input
          type="checkbox"
          id="todo"
          name="todo"
          className="todo-checkbox"
        />
        {props.todo.text}
      </label>
      <div className="todo-actions">
        <button
          className="delete-btn"
          aria-label="Delete ${props.todo.id}"
          onClick={deleteThisTodo}
        >
          Delete Item
        </button>
      </div>
    </div>
  );
}
