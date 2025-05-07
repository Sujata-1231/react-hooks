### Use Effect

- useEffect is a Hook that lets you run side effects in function components.

```js
//   this effect will run when the resource type changes
useEffect(() => {
  console.log("resource type changed");
}, [resourceTypes]);

//   on mount

useEffect(() => {
  console.log("onMount");
}, []);
```
