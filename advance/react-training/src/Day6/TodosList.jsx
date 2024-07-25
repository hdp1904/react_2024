import React, { useEffect, useState } from "react";
import useFetch from "./hooks/useFetch";

export default function TodosList() {
  const {
    data: todos,
    loading,
    error,
  } = useFetch("https://jsonplaceholder.typicode.com/todos");

  return (
    <div>
      <h2>Todos List</h2>
      {loading ? (
        <div>loading...</div>
      ) : error ? (
        <div>Error: {error}</div>
      ) : (
        <div>
          {todos?.map(({ id, title, completed }) => {
            return (
              <React.Fragment key={id}>
                <div>{id}</div>
                <div>{title}</div>
                <div>{completed ? "done" : "not done"}</div>
              </React.Fragment>
            );
          })}
        </div>
      )}
    </div>
  );
}
