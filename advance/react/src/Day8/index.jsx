import React from "react";
import PropDrilling from "./PropDrilling";
import FixPropDrilling from "./FixPropDrilling";
import TodosList from "./TodosList";
import { TodosProvider } from "./context/TodosContext";

export default function Day8() {
  return (
    <div>
      <h1>Day 8</h1>
      {/* <PropDrilling /> */}
      <FixPropDrilling />
      <TodosProvider>
        <TodosList />
      </TodosProvider>
    </div>
  );
}
