import { useCallback, useMemo, useState } from "react";
import Counter from "./Counter";

// Reminder, what causes a component to re-render?
// 1. state changes
// 2. parent re-renders

// React.memo
// prevents unnecessary re-rendering of a component if the props don't change

// useMemo
// caches the result of a function

export default function Memoization() {
  const [input, setInput] = useState("");
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log("Button clicked");
  }, []);

  const counterConfig = useMemo(() => {
    return {
      a: "a",
      b: "b",
    };
  }, []);

  return (
    <div>
      <h2>Memoization Tutorial</h2>
      <input value={input} onChange={(e) => setInput(e.target.value)} />
      <button onClick={() => setCount((prev) => prev + 1)}>Add Count</button>
      <Counter count={count} config={counterConfig} handleClick={handleClick} />
    </div>
  );
}
