import "./TodoItem.css";

export default function TodoItem(props) {


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
        <button className="delete-btn" aria-label='Delete ${props.todo.id}'>
          Delete Item
        </button>
      </div>
    </div>
  );
}
