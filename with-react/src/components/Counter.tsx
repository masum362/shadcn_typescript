import { TypeContext } from "@/context/TypeProvider";
import { useContext, useState } from "react";

const Counter = () => {

  const {count,increment,decrement} = useContext(TypeContext);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default Counter;
