import { useState } from "react";
import "./App.css";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todoText) => {
    const newTodo = {
      id: Date.now().toString(),
      text: todoText,
      completed: false,
    };

    setTodos((prev) => {
      return [...prev, newTodo];    
    });
  };

  return (
    <>
      <header>
        <h1>My Todo List</h1>
      </header>

      <main>
        <section className="todo-input-section">
          <TodoForm addTodo={addTodo}/>
        </section>

        <section className="todo-list-section">
          <TodoList todos={todos}/>
        </section>
      </main>
    </>
  );
}

export default App;
