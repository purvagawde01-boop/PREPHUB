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

$data = json_decode(file_get_contents("php://input"), true);

$role = $data['role'] ?? '';
$category = $data['category'] ?? '';
$section = $data['section'] ?? '';

if ($role !== 'admin') {
    echo json_encode(["success" => false, "message" => "Access denied"]);
    exit;
}

$stmt = $conn->prepare(
  "SELECT id, title, description, created_at 
   FROM exam_content 
   WHERE category = ? AND section = ?
   ORDER BY created_at DESC"
);

$stmt->bind_param("ss", $category, $section);
$stmt->execute();
$result = $stmt->get_result();

$content = [];
while ($row = $result->fetch_assoc()) {
    $content[] = $row;
}

echo json_encode([
  "success" => true,
  "content" => $content
]);
