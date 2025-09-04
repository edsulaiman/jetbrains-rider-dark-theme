// TypeScript Types
type User = { id: number; name: string };
interface Animal {
  species: string;
  age: number;
}

// TypeScript operation expression
const person = {
  firstName: "John",
  lastName: "Doe",
};
class CUser {}
type TUser = typeof person;
const KUser: keyof TUser = "firstName";
if (person instanceof CUser) {
}

// Variables with Type Annotations
const num: number = 42;
let str: string = "TypeScript!";
const isValid: boolean = true;

// Function with Types
function add(a: number, b: number): number {
  return a + b;
}

// Class with Generics
class Box<T> {
  content: T;
  constructor(content: T) {
    this.content = content;
  }
}

// Async Function
async function getData(): Promise<User> {
  const response = await fetch("https://api.example.com/user");
  return await response.json();
}

// Enum
enum Status {
  Active,
  Inactive,
  Pending,
}

// Union Types
function formatID(id: number | string): string {
  return `ID: ${id}`;
}

// Export
export { add, Box, Status };
