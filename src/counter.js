import React, { useState, useEffect } from 'react';




const ErrorMessage = ({ message }) => {
  return <p className="error-message">{message}</p>;
};

const Counter = () => {
  const [count, setCount] = useState(0);
  const [error, setError] = useState(null); 
  useEffect(() => {
    console.log(`Count changed: ${count}`);
  }, [count]);

  const increment = () => {
    setCount(count + 1);
    setError(null); 
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
      setError(null);
    } else {
      setError("Error:Cannot go below 0."); 
    }
  };

  const reset = () => {
    setCount(0);
    setError(null);
  };

  return (
    <div className="counter-container">
      <h1>Counter using React</h1>
      
      <p className='count-class'>Your current count is : {count}</p>
      {error && <ErrorMessage message={error} />} 
      <div className="button-container">
        <button onClick={decrement}>Decrement</button>
        <button onClick={increment}>Increment</button>
        {count > 10 && (
          <button className='go' onClick={reset}>GO BACK TO 0</button>
        )}
      </div>
    </div>
  );
};

export default Counter;
