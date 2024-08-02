import React, { useEffect, useState } from "react";

export default function TodosList() {
  const [todos, setTodos] = useState([]);
  const [isDark, toggleTheme] = useState(true);

  // toggleTheme((prev) => !prev);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((data) => {
        setTodos(data);
      });
  }, []);

  //   console.log("rendering");

  return (
    <div>
      <h2>Todos List</h2>
      <div
        style={{
          backgroundColor: isDark ? "darkgrey" : "lightblue",
          border: "1px solid white",
          height: "500px",
          overflow: "scroll",
        }}
      >
        {todos.map((todo) => {
          return (
            <div key={todo.id}>
              <div>{todo.id}</div>
              <div>{todo.title}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
