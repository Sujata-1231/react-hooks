import React, { useEffect, useState } from "react";

export const UseRef1 = () => {
  const [name, setName] = useState("");
  const [renderedCount, setRenderedCount] = useState(0);

  useEffect(() => {
    setRenderedCount((prevRenderedCount) => prevRenderedCount + 1);
  }, [name]);

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <div>My name is {name}</div>
      <div>I rendered {renderedCount}</div>
    </div>
  );
};
