import { useState } from "react";
import styles from "./form.module.css";
export default function TodoList({ todos, setTodos }) {
  const [todo, setTodo] = useState({ name: "", done: false });
  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos([...todos, todo]);
    setTodo({ name: "", done: false });
  };
  return (
    <div className="">
      <form className={styles.todoForm} onSubmit={handleSubmit}>
        <div className="flex">
          <input
            className={styles.modernInput}
            onChange={(e) => setTodo({ name: e.target.value, done: false })}
            type="text"
            value={todo.name}
            placeholder="Enter ToDo"
          />
          <button className={styles.modernButton} type="submit">
            Add
          </button>
        </div>
      </form>
    </div>
  );
}
