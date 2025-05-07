import React from "react";
import { Counter } from "./Counter";
import CounterExample from "./CounterExample";
import { CountWithObject } from "./CountWithObject";
import { CountWithSeperateState } from "./CountWithSeperateState";
import { UseEffect1 } from "../UseEffect/UseEffect1";
import { WindowWidthEffect } from "../UseEffect/WindowWidthEffect";

export const UseStateHook = () => {
  return (
    <div>
      {/* useState */}
      {/* <Counter />
      <CounterExample />
      <CountWithObject />
      <CountWithSeperateState /> */}

      {/* use Effect */}

      {/* <UseEffect1 /> */}
      <WindowWidthEffect />
    </div>
  );
};
