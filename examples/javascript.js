// Variables and Data Types
const num = 42;
let str = "Hello, world!";
var bool = true;
const arr = [1, 2, 3];
const obj = { key: "value", anotherKey: 10 };

// Function
function add(a, b) {
  return a + b;
}

// Arrow Function
const multiply = (a, b) => a * b;

// Class
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, my name is ${this.name}`);
  }
}

// Async/Await
async function fetchData() {
  try {
    let response = await fetch("https://api.example.com/data");
    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error:", error);
  }
}

// Error Handling
try {
  const message2 = `Hello, World!`;
  throw new Error("Something went wrong!");
} catch (error) {
  console.error(error);
}

// Module Export
export { add, multiply, Person };
