import React from "react";
import { Counter } from "./Counter";
import CounterExample from "./CounterExample";
import { CountWithObject } from "./CountWithObject";
import { CountWithSeperateState } from "./CountWithSeperateState";
import { UseEffect1 } from "../UseEffect/UseEffect1";
import { WindowWidthEffect } from "../UseEffect/WindowWidthEffect";
import { UseRef1 } from "../UseRef/UseRef1";
import { UseRef2 } from "../UseRef/UseRef2";
import { InputFocusRef } from "../UseRef/InputFocusRef";
import { PrevValue } from "../UseRef/PrevValue";

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
      {/* <WindowWidthEffect /> */}

      {/* use Ref */}

      {/* <UseRef1 /> */}
      {/* <UseRef2 /> */}
      {/* <InputFocusRef /> */}
      <PrevValue />
    </div>
  );
};
