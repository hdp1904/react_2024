import React, { useEffect, useState } from "react";

// before react v16.8, class components, because there wasn't any hook
// In v16.8, hooks are introduced to mimic the states and lifecycles of class components

export default function UseEffectLearn() {
  const [count, setCount] = useState(0);

  // with no dependency array
  useEffect(() => {
    // this function will be called on every render
    // console.log("component rerendered");
  });

  // useEffect will always run when the component mounted
  // no matter if you have dep arr or not
  useEffect(() => {
    // console.log("count has changed");
  }, [count]);

  // with empty dependency array: []
  // componentDidMount
  useEffect(() => {
    // console.log("acts like: component did mount");

    return;

    const clickEventListener = (e) => {
      console.log("x", e.x);
      // console.log("y", e.y);
    };
    document.addEventListener("click", clickEventListener);

    // this acts like componentWillUnmount
    // cleaning up
    return () => {
      console.log("acts like: component will unmount");
      document.removeEventListener("click", clickEventListener);
    };
  }, []);

  const handleAdd = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <div
      style={{
        border: "1px solid white",
        padding: "10px",
      }}
    >
      <h2>Use Effect Learn</h2>
      <div>Count: {count}</div>
      <button onClick={handleAdd}>Add</button>
    </div>
  );
}
