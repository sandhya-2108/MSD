import React, { createContext, useContext } from 'react';

const MyContext = createContext();

function Display() {
  const name = useContext(MyContext);

  return <h3>Hello, {name}!</h3>;
}

function ContextHook() {
  return (
    <MyContext.Provider value="Sandhya">
      <div>
        <h2>Context Hook Example</h2>
        <Display />
      </div>
    </MyContext.Provider>
  );
}

export default ContextHook;
