<?php
include_once 'connection.php';
echo $pass = 'password';
echo $hash_pass = password_hash($pass, PASSWORD_BCRYPT);
$stmt = $conn->prepare("INSERT INTO PASSWORD(password)
VALUES ('$hash_pass')");

$stmt->execute();
		
?>