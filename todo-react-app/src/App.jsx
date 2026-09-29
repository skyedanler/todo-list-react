import { useState } from 'react'
import './App.css'
import TodoForm from './TodoForm';

function App() {
  const [todos, setTodos] = useState([]);

  return (
    <>
      <header>
      <h1>My Todo List</h1>
    </header>

    <main>
      <section className="todo-input-section">
        <TodoForm />
      </section>

      <section className="todo-list-section">
        <ul id="todo-list" className="todo-list">
        </ul>
      </section>
    </main>
    </>
  )
}

export default App
