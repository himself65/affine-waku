"use client";

import { useState } from "react";
import useSWR from 'swr'

export const Counter = () => {
  // @ts-ignore
  const { data } = useSWR('hello', () => 'world', {
    suspense: true
  })
  const [count, setCount] = useState(0);
  return (
    <div style={{ border: "3px blue dashed", margin: "1em", padding: "1em" }}>
      <p>Count: {count}</p>
      <button onClick={() => setCount((c) => c + 1)}>Increment</button>
      <h3>This is a client component.</h3>
      <div>
        {data}
      </div>
    </div>
  );
};
