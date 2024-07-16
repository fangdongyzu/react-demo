import React from 'react';

const Greeting = (props) => {
  return (
    <div>
      <h2>Hello, {props.name}!</h2>
      <p>Welcome to the Props Demo.</p>
    </div>
  );
}

export default Greeting;
