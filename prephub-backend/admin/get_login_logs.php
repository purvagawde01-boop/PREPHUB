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

$result = $conn->query(
  "SELECT email, role, ip_address, user_agent, login_time 
   FROM login_logs 
   ORDER BY login_time DESC"
);

$logs = [];
while ($row = $result->fetch_assoc()) {
  $logs[] = $row;
}

echo json_encode([
  "success" => true,
  "logs" => $logs
]);
