<?php
// Enable error reporting
error_reporting(E_ALL);
ini_set('display_errors', 1);

// Namespace and Use (for autoloading)
namespace MyApp;
use PDO;
use Exception;

// Constants
define("SITE_NAME", "My PHP Website");

// Class Example
class User {
    private string $name;
    private int $age;

    public function __construct(string $name, int $age) {
        $this->name = $name;
        $this->age = $age;
    }

    public function greet(): string {
        return "Hello, my name is {$this->name} and I am {$this->age} years old.";
    }
}

// Function Example
function addNumbers(int $a, int $b): int {
    return $a + $b;
}

// Database Connection using PDO
function connectDatabase(): ?PDO {
    try {
        $pdo = new PDO("mysql:host=localhost;dbname=test_db", "root", "password", [
            PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
            PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC
        ]);
        return $pdo;
    } catch (Exception $e) {
        error_log("Database connection failed: " . $e->getMessage());
        return null;
    }
}

// Array Example
$users = [
    ["id" => 1, "name" => "Alice", "role" => "Admin"],
    ["id" => 2, "name" => "Bob", "role" => "Editor"]
];

// Loop Example
foreach ($users as $user) {
    echo "User: " . $user["name"] . " - Role: " . $user["role"] . "<br>";
}

// Conditional Example
$age = 20;
if ($age >= 18) {
    echo "You are an adult.<br>";
} else {
    echo "You are a minor.<br>";
}

// Object Usage
$person = new User("Charlie", 30);
echo $person->greet() . "<br>";

// Call a Function
echo "Sum: " . addNumbers(10, 5) . "<br>";

// Super Global Example
if ($_SERVER["REQUEST_METHOD"] === "GET") {
    echo "This is a GET request.<br>";
}

// JSON Response Example
header("Content-Type: application/json");
echo json_encode(["status" => "success", "message" => "PHP example complete"]);
?>
