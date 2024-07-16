import React, { useState, useEffect } from 'react';

const Timer = () => {
  const [seconds, setSeconds] = useState(0);

  // useEffect hook to update the timer every second
  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(seconds => seconds + 1);
    }, 1000);
  }, []); // Empty dependency array ensures effect runs only once on mount

  // Function to handle reset button click
  const handleReset = () => {
    setSeconds(0);
  };

  return (
    <div>
      <h2>Timer Demo</h2>
      <p>Seconds: {seconds}</p>
      <button onClick={handleReset}>Reset Timer</button>
    </div>
  );
}

export default Timer;
