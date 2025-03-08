import React, { useState } from "react";

// Enum
enum Color {
  Red = "red",
  Blue = "blue",
  Green = "green",
}

// Interface
interface Props {
  title: string;
  count?: number;
}

// Generic Function
const logMessage = <T,>(message: T): void => {
  console.log(message);
};

// Component
const TsxExample: React.FC<Props> = ({ title, count = 0 }) => {
  const [value, setValue] = useState<number>(count);
  const color: Color = Color.Red;
  const message = `Hello, World!`;

  // Function
  const handleClick = (): void => {
    setValue((prev) => prev + 1);
  };

  return (
    <div>
      {/* JSX Elements and Props */}
      <h1>{title}</h1>
      <p>Current count: {value}</p>
      <button onClick={handleClick} style={{ color }}>
        Increment
      </button>

      {/* Type Assertion */}
      <p>{(title as string).toUpperCase()}</p>

      {/* Function Call */}
      {logMessage("Logging message!")}
    </div>
  );
};

export default TsxExample;
