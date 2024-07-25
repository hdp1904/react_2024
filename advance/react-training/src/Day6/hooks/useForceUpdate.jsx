import React, { useState } from "react";

export default function useForceUpdate() {
  const [bool, toggle] = useState(false);
  const rerender = () => {
    toggle((prev) => !prev);
  };
  return rerender;
}
