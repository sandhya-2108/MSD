import React, { useState } from 'react';

function StateHook() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>State Hook Example</h2>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>
    </div>
  );
}

export default StateHook;
