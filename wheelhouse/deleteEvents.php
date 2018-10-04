<?php
header("access-control-allow-origin:*"); 
include_once 'connection.php';

$pass = clean($_REQUEST['pass']);
$id = clean($_REQUEST['id']);

$stmt = $conn->prepare("SELECT password as PASS FROM PASSWORD WHERE passID = 1");
$stmt->execute();
$result = $stmt->fetch(PDO::FETCH_OBJ);
$pwd = $result->PASS;
if(password_verify($pass, $pwd)){
    $stmt = $conn->prepare("DELETE FROM EVENTS WHERE eventID =".$id);
    $stmt->execute();
    echo 'Deleted';
}
else {
    echo 'wrong password';
}

function clean($data)
 {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data,ENT_QUOTES);
    return $data;
}   
		
?>