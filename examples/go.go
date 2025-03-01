package main

import (
	"database/sql"
	"encoding/json"
	"fmt"
	"log"
	"net/http"
	"time"

	_ "github.com/go-sql-driver/mysql"
)

// Constants
const siteName = "GoLang Example"

// Struct
type User struct {
	ID   int    `json:"id"`
	Name string `json:"name"`
	Age  int    `json:"age"`
}

// Interface Example
type Greeter interface {
	Greet() string
}

// Method Implementation
func (u User) Greet() string {
	return fmt.Sprintf("Hello, my name is %s and I am %d years old.", u.Name, u.Age)
}

// Function Example
func addNumbers(a int, b int) int {
	return a + b
}

// Database Connection
func connectDatabase() (*sql.DB, error) {
	dsn := "root:password@tcp(localhost:3306)/test_db"
	db, err := sql.Open("mysql", dsn)
	if err != nil {
		return nil, err
	}
	return db, nil
}

// Goroutine Example
func printNumbers() {
	for i := 1; i <= 5; i++ {
		fmt.Println("Number:", i)
		time.Sleep(time.Millisecond * 500)
	}
}

// HTTP Handler Example
func userHandler(w http.ResponseWriter, r *http.Request) {
	users := []User{
		{ID: 1, Name: "Alice", Age: 25},
		{ID: 2, Name: "Bob", Age: 30},
	}

	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(users)
}

func main() {
	fmt.Println("Go Syntax Highlighting Example")

	// Variables
	var num int = 42
	pi := 3.14
	message := "Hello, Go!"
	fmt.Println(num, pi, message)

	// Struct Example
	person := User{ID: 1, Name: "Charlie", Age: 28}
	fmt.Println(person.Greet())

	// Function Call
	fmt.Println("Sum:", addNumbers(10, 5))

	// Goroutines (Concurrency)
	go printNumbers()

	// HTTP Server
	http.HandleFunc("/users", userHandler)
	go func() {
		log.Println("Starting server on :8080")
		log.Fatal(http.ListenAndServe(":8080", nil))
	}()

	// Database Connection Example
	db, err := connectDatabase()
	if err != nil {
		log.Fatal("Database connection failed:", err)
	}
	defer db.Close()

	// Keep the main function alive
	select {}
}
