<?php
header("access-control-allow-origin:*"); 
include_once 'connection.php';

$events = array();

$stmt = $conn->prepare("SELECT eventID, eventTitle, eventDate, eventBy, eventlocation, eventDescription, eventImage FROM EVENTS");
$stmt->execute();

foreach($stmt->fetchAll(PDO::FETCH_OBJ) as $result){
		array_push($events,array(
			"id" => $result->eventID,
			"title" => $result->eventTitle,
			"date" => $result->eventDate,
			"by" => $result->eventBy,
			"loc" => $result->eventlocation,
            "desc" => $result->eventDescription,
            "img" => $result->eventImage,
        ));
}

echo json_encode( $events );
		
?>