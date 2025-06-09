"use client";

import { useCallback, useState } from "react";

const CallbackPractice = () => {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => setCount((prev) => prev + 1), []);
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1>{count}</h1>
      <button onClick={increment}>Increment</button>
      testing useCallback
    </div>
  );
};

export default CallbackPractice;
