#include <stdio.h>
#include <stdlib.h>
#include <string.h>

// Macro
#define PI 3.14159

// Enum
typedef enum {
    ACTIVE,
    INACTIVE,
    PENDING
} Status;

// Structure
typedef struct {
    char name[50];
    int age;
} Person;

// Function Prototype
void greet(Person *p);

// Function Implementation
void greet(Person *p) {
    printf("Hello, my name is %s and I am %d years old.\n", p->name, p->age);
}

// Pointers and Memory Allocation
void memoryExample() {
    int *ptr = (int*)malloc(sizeof(int));
    if (ptr == NULL) {
        fprintf(stderr, "Memory allocation failed\n");
        return;
    }
    *ptr = 42;
    printf("Pointer value: %d\n", *ptr);
    free(ptr);
}

// Exception-like Handling (Using Return Codes)
int riskyOperation() {
    printf("Attempting risky operation...\n");
    return -1;  // Simulated error
}

// Main Function
int main() {
    printf("C Syntax Highlighting Example\n");

    // Variables
    int num = 42;
    double pi = PI;
    char message[] = "Hello, C!";
    
    // Structure Usage
    Person person;
    strcpy(person.name, "Alice");
    person.age = 25;
    greet(&person);

    // Function Call
    memoryExample();

    // Error Handling
    if (riskyOperation() == -1) {
        fprintf(stderr, "An error occurred in riskyOperation\n");
    }

    return 0;
}
