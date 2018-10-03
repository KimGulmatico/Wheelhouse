<?php
// $servername = "localhost";
// $username = "thecywmk";
// $password = "5F6x2VtIJMw1";

// try {
//     $conn = new PDO("mysql:host=".$servername.";dbname=thecywmk_cocircle", $username, $password);
//     // set the PDO error mode to exception
//     $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
//     //echo "Connected successfully"; 
//     }
// catch(PDOException $e)
//     {
//     echo "Connection failed: " . $e->getMessage();
//     }
	
$servername = "localhost";
$username = "root";
$password = "";

try {
    $conn = new PDO("mysql:host=".$servername.";dbname=wheelhouse", $username, $password);
    //set the PDO error mode to exception
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    //echo "Connected successfully"; 
}
catch(PDOException $e){
    echo "Connection failed: " . $e->getMessage();
}
?>

