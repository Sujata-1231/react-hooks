import { useState, useRef } from "react";

export const InputFocusRef = () => {
  const [name, setName] = useState("");
  const inputRef = useRef(null);
  return (
    <div>
      <input
        type="text"
        ref={inputRef}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <div>My name is {name}</div>
      <button onClick={() => inputRef.current.focus()}>Focus Input</button>
    </div>
  );
};
