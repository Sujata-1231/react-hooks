### useState Hook

- There are two hooks that are used for modern state management in React: useState and useReducer.
- useState hook is used to manage the state of a component in functional components. Calling useState returns an array with two elements: the current state value and a function to update the state.
- We can only use hooks inside the function components

- Important Node:

```js
<button onClick={setState(state + 1)}>Click me</button>
setState(state + 1) is called immediately when the component renders, not when the button is clicked. This causes setState to run on every render, triggering another render, which calls setState again… and so on — leading to an infinite loop of re-renders.


Wrap the state update inside a function so it only runs on click, not during render:

<button onClick={() => setState(state + 1)}>Click me</button>

```

```js
setCount(count - 1); // uses stale value (e.g., 0 → -1)
setCount((prev) => prev - 1); // works correctly → -1 → -2
setCount((prev) => prev - 1); // → -2 → -3
setCount(count - 1); // again uses stale 0 → sets count to -1
```

- Even though the prev => ones were accurate, the last setCount(count - 1) says: set it to -1, based on the original count.
- React will apply all these updates in a batch, and the last one wins — so the state becomes -1, not -3.
  Rule of thumb:
- If you're doing only one update: setCount(count + 1) or setCount(count - 1) is fine.
- If you're doing multiple updates in a row, use: setCount(prev => prev + 1) to avoid stale data.

```js
function decrement() {
  setCount(count - 1); // ❌ uses stale count (e.g., 0 - 1 = -1)
  setCount((prev) => prev - 1); // ✅ correct: -1 - 1 = -2
  setCount((prev) => prev - 1); // ✅ correct: -2 - 1 = -3
  setCount(count - 1); // ❌ uses stale count again (0 - 1 = -1), overrides previous changes
}
```

- Why it doesn't work:
- React batches state updates for performance. When you use setCount(count - 1), it uses the current value of count when the function was created, not the updated value from previous calls.

- So both setCount(count - 1) calls are effectively doing setCount(-1) if count is 0, overriding the intermediate updates.

- Even though the two functional updates are correctly applied, the final setCount(count - 1) overwrites everything with stale data.

```js
fx: function decrement() {
  setCount((prev) => prev - 1);
  setCount((prev) => prev - 1);
  setCount((prev) => prev - 1);
}

function decrement() {
  setCount((prev) => prev - 3);
}
```
