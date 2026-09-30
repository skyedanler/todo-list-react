import TodoItem from "./TodoItem";

export default function TodoList(props) {
  return (
    <ul id="todo-list" className="todo-list">
      {props.todos.map((todo) => {
        return (
          <TodoItem
            key={todo.id}
            todo={todo}
            handleDelete={props.handleDelete}
          />
        );
      })}
    </ul>
  );
}
