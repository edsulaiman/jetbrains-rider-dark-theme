import React, { useState } from "react"; // Import keyword, string

const ExampleComponent = () => {
  // Variables and state
  const [count, setCount] = useState(0);
  const message = "Hello, World!";
  const message2 = `Hello, World!`;

  // Function
  const handleClick = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <div>
      {/* JSX elements */}
      <h1>{message}</h1>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Increment</button>

      {/* Boolean, null, and operators */}
      {count > 0 ? <p>Positive</p> : null}
      {true && <p>Always visible</p>}
    </div>
  );
};

export default ExampleComponent; // Export keyword
