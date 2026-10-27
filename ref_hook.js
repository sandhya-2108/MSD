import React, { useRef } from 'react';

function RefHook() {
  const inputRef = useRef(null);

  function handleClick() {
    inputRef.current.focus();
  }

  return (
    <div>
      <h2>Ref Hook Example</h2>
      <input ref={inputRef} type="text" placeholder="Enter your name" />
      <button onClick={handleClick}>Focus Input</button>
    </div>
  );
}

export default RefHook;
