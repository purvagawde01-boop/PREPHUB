<?php
$host = "localhost";
$user = "root";
$password = "";
$database = "prephub";
$port = 3307;

$conn = new mysqli($host, $user, $password, $database, $port);

if ($conn->connect_error) {
    http_response_code(500);
    exit;
}
