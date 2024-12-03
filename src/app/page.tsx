'use client'
import { Button } from "@/components/ui/button";
import { useState, useRef } from "react";


export default function Counter() {
  const [count, setCount] = useState(0);
  const intervalRef = useRef(null); // To store the interval ID for long press
  
  // Increment function
  function increment() {
    setCount((prev) => prev + 1);
  }

  // Decrement function
  function decrement() {
    setCount((prev) => prev - 1);
  }

  // Reset function
  function reset() {
    setCount(0);
  }

  // Handle long press start
  function startLongPress(action) {
    intervalRef.current = setInterval(() => {
      action();
    }, 100); // Speed of increase/decrease while long pressing
  }

  // Stop long press
  function stopLongPress() {
    clearInterval(intervalRef.current);
  }

  return (
    <div className="flex gap-20 items-center justify-center w-[80%] h-[100vh] mx-auto">
      <Button
        onMouseDown={() => startLongPress(increment)}
        onMouseUp={stopLongPress}
        onMouseLeave={stopLongPress}
        onTouchStart={() => startLongPress(increment)}
        onTouchEnd={stopLongPress}
      >
        +
      </Button>

      <h1>{count}</h1>

      <Button
        onMouseDown={() => startLongPress(decrement)}
        onMouseUp={stopLongPress}
        onMouseLeave={stopLongPress}
        onTouchStart={() => startLongPress(decrement)}
        onTouchEnd={stopLongPress}
      >
        -
      </Button>

      <Button onClick={reset}>Reset</Button>
    </div>
  );
}
