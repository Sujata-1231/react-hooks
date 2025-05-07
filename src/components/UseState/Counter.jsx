import { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);

  function decrement() {
    setCount(count - 1);
    setCount((pre) => pre - 1);
    setCount((pre) => pre - 1);
    setCount(count - 1);
    setCount((pre) => pre - 1);
  }

  function increment() {
    setCount(count + 1);
  }
  return (
    <>
      {count}
      <button onClick={decrement}>-</button>
      <span>0</span>
      <button onClick={increment}>+</button>
    </>
  );
};
