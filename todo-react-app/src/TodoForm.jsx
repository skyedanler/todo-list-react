
export default function TodoForm() {
    const handleClick = (event) => {
        
    }

    return (
      <form id="todo-form" class="todo-form">
        <div className="input-group">
          <input
            type="text"
            id="todo-input"
            placeholder="Enter a new todo..."
            required
            aria-label="New todo item"
          />
          <button type="submit" className="add-btn" onClick={handleClick}>
            Add Todo
          </button>
        </div>
        <div id="error-message" className="error-message" role="alert"></div>
      </form>
    );
}