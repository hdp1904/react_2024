import React, { useContext, useState } from "react";
import { TodosContext } from "./context/TodosContext";

export default function TodosList() {
  const { todos, handleDelete, handleAdd } = useContext(TodosContext);

  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAdd(value);
  };

  return (
    <div>
      <h3>Todo List</h3>
      <form onSubmit={handleSubmit}>
        <input value={value} onChange={(e) => setValue(e.target.value)} />
        <button type="submit">Add</button>
      </form>
      <div>
        {todos.map((todo) => (
          <div key={todo.id}>
            <div>{todo.content}</div>
            <button onClick={() => handleDelete(todo.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}
