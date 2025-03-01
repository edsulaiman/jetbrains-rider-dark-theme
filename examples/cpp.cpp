#include <iostream>
#include <vector>
#include <string>
#include <stdexcept>

// Namespace
using namespace std;

// Enum
enum Status { Active, Inactive, Pending };

// Class with Constructor, Destructor, and Methods
class Person {
private:
    string name;
    int age;

public:
    Person(string n, int a) : name(n), age(a) {}

    void greet() const {
        cout << "Hello, my name is " << name << " and I am " << age << " years old.\n";
    }

    ~Person() {
        cout << name << " is being deleted.\n";
    }
};

// Function Template
template <typename T>
T add(T a, T b) {
    return a + b;
}

// Exception Handling
void riskyOperation() {
    try {
        throw runtime_error("Something went wrong!");
    } catch (const exception &e) {
        cerr << "Error: " << e.what() << endl;
    }
}

// Pointers and Dynamic Memory
void memoryExample() {
    int *ptr = new int(10);
    cout << "Pointer value: " << *ptr << endl;
    delete ptr;
}

// Main Function
int main() {
    cout << "C++ Syntax Highlighting Example\n";

    // Variables
    int num = 42;
    double pi = 3.14;
    string message = "Hello, C++!";
    vector<int> numbers = {1, 2, 3};

    // Object
    Person person("Alice", 25);
    person.greet();

    // Function Call
    cout << "Sum: " << add(10, 20) << endl;

    // Pointers
    memoryExample();

    // Exception Handling
    riskyOperation();

    return 0;
}
