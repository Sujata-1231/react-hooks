import { useState } from "react";

export default function CounterExample() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    console.log("Initial count:", count);

    // Stale update — uses count = 0
    setCount(count - 1);

    // Correct: uses updated value in sequence
    setCount((prev) => {
      console.log("First functional update, prev =", prev);
      return prev - 1;
    });

    setCount((prev) => {
      console.log("Second functional update, prev =", prev);
      return prev - 1;
    });

    // Again stale count
    setCount(count - 1);
  };

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={handleClick}>Decrement Multiple Times</button>
    </div>
  );
}
