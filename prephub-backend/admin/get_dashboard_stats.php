<?php
header("Access-Control-Allow-Origin: http://localhost:5173");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}


require_once __DIR__ . "/../auth/db.php";

$totalUsers = $conn->query("SELECT COUNT(*) c FROM users")->fetch_assoc()['c'];
$totalAdmins = $conn->query("SELECT COUNT(*) c FROM users WHERE role='admin'")->fetch_assoc()['c'];
$totalLogins = $conn->query("SELECT COUNT(*) c FROM login_logs")->fetch_assoc()['c'];
$loginsToday = $conn->query("SELECT COUNT(*) c FROM login_logs WHERE DATE(login_time)=CURDATE()")->fetch_assoc()['c'];

echo json_encode([
  "success" => true,
  "stats" => [
    "totalUsers" => (int)$totalUsers,
    "totalAdmins" => (int)$totalAdmins,
    "totalLogins" => (int)$totalLogins,
    "loginsToday" => (int)$loginsToday
  ]
]);
exit;
