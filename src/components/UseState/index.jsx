import React from "react";
import { Counter } from "./Counter";
import CounterExample from "./CounterExample";
import { CountWithObject } from "./CountWithObject";
import { CountWithSeperateState } from "./CountWithSeperateState";

export const UseStateHook = () => {
  return (
    <div>
      <Counter />
      <CounterExample />
      <CountWithObject />
      <CountWithSeperateState />
    </div>
  );
};
