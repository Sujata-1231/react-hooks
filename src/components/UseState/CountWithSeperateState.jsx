import { useState } from "react";

export const CountWithSeperateState = () => {
  const [state, setState] = useState(4);
  const [theme, setTheme] = useState("blue");

  function incrementCount() {
    setState((prev) => prev + 1);
    setTheme("red");
  }
  function decrementCount() {
    setState((prev) => prev - 1);
    setTheme("green");
  }

  return (
    <div>
      <button onClick={decrementCount}>-</button>
      <span>{state}</span>
      <span>{theme}</span>
      <button onClick={incrementCount}>+</button>
    </div>
  );
};
