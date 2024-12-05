import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addByAmount, addCount } from "../redux/reducers/countReducer";
import { toggleTheme } from "../redux/reducers/themeReducer";
import ClassCounter from "./ClassCounter";
import UserProfile from "./UserProfile";

export default function Day9Redux() {
  const [amount, setAmount] = useState(0);

  const count = useSelector((state) => state.count);
  const theme = useSelector((state) => state.theme);

  const dispatch = useDispatch();

  // return <UserProfile />;

  return (
    <div>
      <h1>Day 9 Redux</h1>
      <button
        onClick={() => {
          dispatch(toggleTheme());
        }}
      >
        Toggle Theme
      </button>
      <div>Theme: {theme}</div>
      <div>Count: {count}</div>
      <input
        value={amount}
        onChange={(e) => setAmount(Number(e.target.value))}
      />
      <button
        onClick={() => {
          dispatch(addCount());
        }}
      >
        Add
      </button>
      <button
        onClick={() => {
          dispatch(addByAmount(amount));
        }}
      >
        Add by: {amount}
      </button>
      <A />
      <ClassCounter />
    </div>
  );
}

function A() {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>A</h2>
      <button
        onClick={() => {
          dispatch(addCount());
        }}
      >
        Add by 1
      </button>
      <div>Count: {count}</div>
    </div>
  );
}
