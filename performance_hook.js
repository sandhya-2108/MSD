import React, { useState, useMemo } from 'react';

function PerformanceHook() {
  const [number, setNumber] = useState(1);

  const square = useMemo(() => {
    return number * number;
  }, [number]);

  return (
    <div>
      <h2>Performance Hook Example</h2>
      <p>Number: {number}</p>
      <p>Square: {square}</p>
      <button onClick={() => setNumber(number + 1)}>
        Increase
      </button>
    </div>
  );
}

export default PerformanceHook;
