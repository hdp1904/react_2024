import React, { useContext, useState } from "react";
import CountContext from "./context/CountContext";

export default function FixPropDrilling() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Fix Prop Drilling with Context</h2>
      <div>Count: {count}</div>
      <div>
        <button onClick={() => setCount((prev) => prev + 1)}>Add</button>
      </div>
      <CountContext.Provider value={{ count, setCount }}>
        <A />
      </CountContext.Provider>
    </div>
  );
}

function A() {
  const { count } = useContext(CountContext);
  return (
    <div
      style={{
        border: "1px solid white",
        padding: "10px",
      }}
    >
      <h3>A: {count} </h3>
      <B />
    </div>
  );
}
function B() {
  return (
    <div
      style={{
        border: "1px solid white",
        padding: "10px",
      }}
    >
      <h3>B</h3>
      <C />
    </div>
  );
}
function C() {
  return (
    <div
      style={{
        border: "1px solid white",
        padding: "10px",
      }}
    >
      <h3>C</h3>
      <D />
    </div>
  );
}
function D() {
  const { count, setCount } = useContext(CountContext);

  return (
    <div
      style={{
        border: "1px solid white",
        padding: "10px",
      }}
    >
      <h3>D: {count}</h3>
      <button onClick={() => setCount((prev) => prev + 1)}>Add</button>
    </div>
  );
}
