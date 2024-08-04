import React, { useState } from "react";
import useForceUpdate from "./hooks/useForceUpdate";

export default function Parent() {
  const rerender = useForceUpdate();
  console.log("parent rerendering...");

  return (
    <div
      style={{
        border: "1px solid white",
        padding: "10px",
      }}
    >
      <h3>Parent</h3>
      <button onClick={rerender}>Rerender The Parent</button>
      <Child />
    </div>
  );
}

function Child() {
  const rerender = useForceUpdate();

  console.log("child rerendering...");

  return (
    <div
      style={{
        border: "1px solid white",
        padding: "10px",
      }}
    >
      <h3>Child</h3>
      <button onClick={rerender}>Rerender The Child</button>
      <GrandChild />
    </div>
  );
}

function GrandChild() {
  const rerender = useForceUpdate();

  console.log("grand child rerendering...");

  return (
    <div
      style={{
        border: "1px solid white",
        padding: "10px",
      }}
    >
      <h3>Grand Child</h3>
      <button onClick={rerender}>Rerender The Grand Child</button>
    </div>
  );
}
