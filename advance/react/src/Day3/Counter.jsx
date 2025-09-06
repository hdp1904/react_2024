import React, { useEffect, useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  //   console.log("counter rendering...");

  const handleAdd = () => {
    // setCount(10);
    setCount((prev) => prev + 1);
  };

  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={handleAdd}>Add</button>
    </div>
  );
}

// diffing algorithm: look for the changes in virtual dom
{
  /* <div>
  <h2>Counter: 1</h2>
  <button onClick={handleAdd}>Add</button>
</div>

<div>
    <h2>Counter: 2</h2>
    <button onClick={handleAdd}>Add</button>
</div> */
}
