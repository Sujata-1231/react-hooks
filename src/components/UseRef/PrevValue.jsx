import { useState, useEffect, useRef } from "react";

export const PrevValue = () => {
  const [name, setName] = useState("");
  const prevName = useRef("");

  useEffect(() => {
    prevName.current = name;
  }, [name]);

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <div>
        My name is <h1>{name}</h1>
        and it is used to be <h1>{prevName.current}</h1>
      </div>
    </div>
  );
};
