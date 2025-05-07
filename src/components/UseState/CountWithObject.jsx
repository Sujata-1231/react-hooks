import { useState } from "react";

export const CountWithObject = () => {
  const [state, setState] = useState({ count: 4, theme: "blue" });

  const count = state.count;
  const theme = state.theme;

  function incrementCount() {
    // setState((prev) => prev + 1);
    setState((prev) => {
      return { ...prev, count: prev.count + 1 };
    });
  }
  function decrementCount() {
    // setState((prev) => prev - 1);
    setState((prev) => {
      // we have to spread out the previous state then set the new state otherwise all previous state would be disappear.
      // in case of object
      return { ...prev, count: prev.count - 1 };
    });
  }

  return (
    <div>
      <button onClick={decrementCount}>-</button>
      <span>{count}</span>
      <span>{theme}</span>
      <button onClick={incrementCount}>+</button>
    </div>
  );
};
