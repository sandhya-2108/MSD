import React, { use, Suspense } from 'react';

const messagePromise = Promise.resolve('Welcome to React!');

function DisplayMessage() {
  const message = use(messagePromise);

  return <h3>{message}</h3>;
}

function ResourceHook() {
  return (
    <div>
      <h2>Resource Hook Example</h2>
      <Suspense fallback={<p>Loading...</p>}>
        <DisplayMessage />
      </Suspense>
    </div>
  );
}

export default ResourceHook;
