<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

header("Access-Control-Allow-Origin: http://localhost:5173");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Content-Type: application/json");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

require_once __DIR__ . "/db.php";

// READ INPUT
$data = json_decode(file_get_contents("php://input"), true);

$email = $data['email'] ?? '';
$password = $data['password'] ?? '';

// ✅ VALIDATION (CORRECT PLACE)
if (!$email || !$password) {
    echo json_encode([
        "success" => false,
        "message" => "Email and password required"
    ]);
    exit;
}

// FETCH USER
$sql = "SELECT id, full_name, email, password, role FROM users WHERE email = ?";
$stmt = mysqli_prepare($conn, $sql);
if (!$stmt) {
    echo json_encode(["success" => false, "message" => "Server error"]);
    exit;
}

$stmt->bind_param("s", $email);
$stmt->execute();
$result = $stmt->get_result();

if ($result->num_rows !== 1) {
    echo json_encode([
        "success" => false,
        "message" => "Invalid credentials"
    ]);
    exit;
}

$user = $result->fetch_assoc();

// ✅ PASSWORD VERIFY (VERY IMPORTANT)
if (!password_verify($password, $user['password'])) {
    echo json_encode([
        "success" => false,
        "message" => "Invalid credentials"
    ]);
    exit;
}

// ✅ LOGIN SUCCESS → LOG HERE
$userId = $user['id'];
$userEmail = $user['email'];
$role = $user['role'];
$ip = $_SERVER['REMOTE_ADDR'];
$agent = $_SERVER['HTTP_USER_AGENT'];

$logStmt = $conn->prepare(
    "INSERT INTO login_logs (user_id, email, role, ip_address, user_agent)
     VALUES (?, ?, ?, ?, ?)"
);
$logStmt->bind_param("issss", $userId, $userEmail, $role, $ip, $agent);
$logStmt->execute();

// ✅ SUCCESS RESPONSE
echo json_encode([
    "success" => true,
    "role" => $role,
    "user" => [
        "id" => $userId,
        "full_name" => $user['full_name'],
        "email" => $userEmail
    ]
]);
exit;
