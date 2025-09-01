import React, { useState } from "react";

export default function useForceUpdate() {

  const rerender = () => {
    toggle((prev) => !prev);
  };
  return rerender;
}
