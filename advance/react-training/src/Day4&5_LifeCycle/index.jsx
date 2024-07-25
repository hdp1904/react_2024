import React, { useEffect, useState } from "react";
import ClassCounter from "./Counter";
import UseEffectLearn from "./UseEffectLearn";
import TodosList from "./TodosList";
import { PostFetcherFn, PostFetcherClass } from "../projects/PostFetcher";
import InitPropWithState from "./InitPropWithState";

export default function Day45Lifecycle() {
  const [shown, setShown] = useState(true);
  const [count, setCount] = useState(0);

  // console.log("parent rerendering");

  return (
    <div>
      <h1>Day 4 Life Cycle</h1>
      <div>
        <button onClick={() => setShown((prev) => !prev)}>
          {shown ? "Hide Child" : "Show Child"}
        </button>
        <button
          onClick={() => {
            setCount((prev) => prev + 1);
          }}
        >
          Re-render Parent Component
        </button>
      </div>
      {shown ? (
        <>
          {/* Class Components */}
          {/* <ClassCounter title={"Counter"} /> */}

          {/* Function Components */}
          {/* <UseEffectLearn /> */}
          {/* <TodosList /> */}
          <PostFetcherFn />
        </>
      ) : null}

      <InitPropWithState />
    </div>
  );
}
