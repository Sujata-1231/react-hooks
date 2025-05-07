### Use Ref

- To persist data across renders without triggering a re-render

```js
 useEffect(() => {
    // this will make our code run into infinite loop
    setRenderedCount((prevRenderedCount) => prevRenderedCount + 1);
  });

  ...will run on every render.

But since setRenderedCount(...) causes a re-render, this causes:

useEffect runs → increments count

setRenderedCount triggers re-render

useEffect runs again...

🔁 infinite loop
```

- Your [name] dependency version works if you're only interested in render counts tied to name updates — which is totally valid for that narrow case.

- But if you want to count every render, no matter what caused it (e.g., other state updates, parent re-renders), useRef is the more accurate and efficient choice — because:

- It doesn't cause re-renders

- It updates silently in the background

- UseRef returns an object.
