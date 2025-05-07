import { useEffect, useState } from "react";

export const UseEffect1 = () => {
  const [resourceTypes, setResourceTypes] = useState("posts");
  const [items, setItem] = useState([]);

  console.log("render");

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${resourceTypes}`)
      .then((response) => response.json())
      .then((json) => setItem(json));
  }, [resourceTypes]);

  return (
    <div style={{ marginTop: "20px" }}>
      <button onClick={() => setResourceTypes("posts")}>Posts</button>
      <button onClick={() => setResourceTypes("users")}>Users</button>
      <button onClick={() => setResourceTypes("comments")}>Comments</button>
      <h1>{resourceTypes}</h1>
      {items.map((item) => (
        <pre key={item.id}>{JSON.stringify(item)}</pre>
      ))}
    </div>
  );
};
