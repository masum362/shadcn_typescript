// import { TypeContext } from "@/context/TypeProvider";
// import { useContext, useState } from "react";

import { useReducer } from "react";

type StateType = { count: number };
type Action = {
  type: "INCREMENT" | "DECREMENT";
};

const reducer = (state: StateType, action: Action): StateType => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    default:
      return state;
  }
};

const initialState: StateType = {
  count: 0,
};

const Counter = () => {
  // const {count,increment,decrement} = useContext(TypeContext);

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h1>Count: {state.count}</h1>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>Decrement</button>
    </div>
  );
};

export default Counter;
