// Dart Variables
int number = 42;
String text = "Hello, Dart!";
bool isActive = true;
List<int> numbers = [1, 2, 3];
Map<String, dynamic> data = {"key": "value", "age": 30};

// Function
int add(int a, int b) {
  return a + b;
}

// Arrow Function
int multiply(int a, int b) => a * b;

// Class with Constructor
class Person {
  String name;
  int age;

  Person(this.name, this.age);

  void greet() {
    print("Hello, my name is $name");
  }
}

// Async Function
Future<void> fetchData() async {
  await Future.delayed(Duration(seconds: 1));
  print("Data fetched");
}

// Exception Handling
void riskyOperation() {
  try {
    throw Exception("Something went wrong!");
  } catch (e) {
    print("Caught an error: $e");
  }
}

// Main Function
void main() {
  print(add(10, 20));
  fetchData();
  Person("Alice", 25).greet();
}
