import { createContext, useState } from "react";
import { uuidv4 } from "../../util/uuid";

export const TodosContext = createContext();

export function TodosProvider({ children }) {
  const [todos, setTodos] = useState([]);

  const handleAdd = (content) => {
    setTodos((prev) => [...prev, { id: uuidv4(), content }]);
  };

  const handleDelete = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  return (
    <TodosContext.Provider
        value={{
          todos,
          handleAdd,
          handleDelete,
        }}
    >
      {children}
    </TodosContext.Provider>
  );
}
