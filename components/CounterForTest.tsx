"use client";
import { useState } from "react";

export default function CounterForTest() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prev) => prev + 1);
  };
  const decrement = () => {
    setCount((prev) => Math.max(0, prev - 1));
  };
  const reset = () => {
    setCount(0);
  };
  console.log("CounterForTest rendered client-side");
  return (
    <div className="flex items-center justify-center gap-3">
      <p>Count: {count}</p>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={increment}
      >
        Increment
      </button>
      <button
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        onClick={decrement}
      >
        Decrement
      </button>
      <button
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        onClick={reset}
      >
        Reset
      </button>
    </div>
  );
}
