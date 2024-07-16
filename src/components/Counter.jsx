import React, { useState } from 'react';

const Counter = () => {
  // Declare a state variable named 'count' initialized to 0, and a function 'setCount' to update it
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Counter Demo</h2>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}

export default Counter;
