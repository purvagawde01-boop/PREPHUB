<?php
error_reporting(0);
ini_set('display_errors', 0);
header("Access-Control-Allow-Origin: http://localhost:5173");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Content-Type: application/json");

// Handle preflight request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}
header("Content-Type: application/json");
require_once __DIR__ . "/db.php";



// READ JSON DATA
$data = json_decode(file_get_contents("php://input"), true);

$full_name = $data['full_name'] ?? '';
$dob = $data['dob'] ?? '';
$gender = $data['gender'] ?? '';
$education = $data['education'] ?? '';
$recruitment_stream = $data['recruitment_stream'] ?? '';
$email = $data['email'] ?? '';
$password = $data['password'] ?? '';

// VALIDATION
if (
    empty($full_name) ||
    empty($dob) ||
    empty($gender) ||
    empty($education) ||
    empty($recruitment_stream) ||
    empty($email) ||
    empty($password)
) {
    echo json_encode([
        "success" => false,
        "message" => "All fields are required"
    ]);
    exit;
}

// HASH PASSWORD
$hashedPassword = password_hash($password, PASSWORD_DEFAULT);

// INSERT QUERY
$stmt = $conn->prepare("
  INSERT INTO users 
  (full_name, dob, gender, education, recruitment_stream, email, password)
  VALUES (?, ?, ?, ?, ?, ?, ?)
");

$stmt->bind_param(
    "sssssss",
    $full_name,
    $dob,
    $gender,
    $education,
    $recruitment_stream,
    $email,
    $hashedPassword
);

if ($stmt->execute()) {
    echo json_encode([
        "success" => true,
        "message" => "Signup successful"
    ]);
} else {
    echo json_encode([
        "success" => false,
        "message" => "Email already exists"
    ]);
}

$stmt->close();
$conn->close();
