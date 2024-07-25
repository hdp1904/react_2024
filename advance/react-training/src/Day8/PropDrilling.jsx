import React, { useState } from "react";

export default function PropDrilling() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Prop Drilling. Count: {count}</h2>
      <div>
        <button onClick={() => setCount((prev) => prev + 1)}>Add</button>
      </div>
      <A count={count} />
    </div>
  );
}

function A({ count }) {
  return (
    <div
      style={{
        border: "1px solid white",
        padding: "10px",
      }}
    >
      <h3>A: {count} </h3>
      <B count={count} />
    </div>
  );
}
function B({ count }) {
  return (
    <div
      style={{
        border: "1px solid white",
        padding: "10px",
      }}
    >
      <h3>B</h3>
      <C count={count} />
    </div>
  );
}
function C({ count }) {
  return (
    <div
      style={{
        border: "1px solid white",
        padding: "10px",
      }}
    >
      <h3>C</h3>
      <D count={count} />
    </div>
  );
}
function D({ count }) {
  return (
    <div
      style={{
        border: "1px solid white",
        padding: "10px",
      }}
    >
      <h3>D: {count}</h3>
    </div>
  );
}
