# Variables
num = 42
text = "Hello, Python!"
is_valid = True
my_list = [1, 2, 3]
my_dict = {"key": "value"}

# Function
def add(a: int, b: int) -> int:
    return a + b

# Class with Constructor
class Person:
    def __init__(self, name: str, age: int):
        self.name = name
        self.age = age

    def greet(self):
        print(f"Hello, my name is {self.name}")

# Exception Handling
try:
    result = 1 / 0
except ZeroDivisionError as e:
    print("Error:", e)

# Lambda Function
multiply = lambda x, y: x * y

# Async Function
import asyncio

async def fetch_data():
    print("Fetching data...")
    await asyncio.sleep(1)
    return {"data": "sample"}

# Main Function
if __name__ == "__main__":
    print(add(5, 10))
