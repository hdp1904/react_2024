import React, { useState } from "react";

export default function InitPropWithState() {
  const [count, setCount] = useState(0);
  console.log("parent", count);
  return (
    <div>
      <button onClick={() => setCount((prev) => prev + 1)}>Add</button>
      <Child a={count} />
    </div>
  );
}

function Child({ a }) {
  const [state, setState] = useState(a);
  console.log("render");
  return <div>A: {state}</div>;
}

// https://stackoverflow.com/questions/71163515/is-initial-state-based-on-props-always-bad-in-react
