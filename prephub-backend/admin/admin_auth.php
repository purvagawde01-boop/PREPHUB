<?php
require_once __DIR__ . "/../auth/db.php";

$raw = file_get_contents("php://input");
$data = json_decode($raw, true);

$role = $data['role'] ?? '';

if ($role !== 'admin') {
    http_response_code(403);
    echo json_encode([
        "success" => false,
        "message" => "Access denied"
    ]);
    exit;
}
