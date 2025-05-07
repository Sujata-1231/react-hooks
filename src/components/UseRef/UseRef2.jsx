import React, { useEffect, useRef, useState } from "react";

export const UseRef2 = () => {
  const [name, setName] = useState("");
  const renderedCount = useRef(0);
  console.log(renderedCount);
  useEffect(() => {
    renderedCount.current = renderedCount.current + 1;
  }, [name]);

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <div>My name is {name}</div>
      <div>I rendered {renderedCount.current}</div>
    </div>
  );
};
