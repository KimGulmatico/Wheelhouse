<?php 
    header("access-control-allow-origin:*"); //allows cross domain
    include_once 'connection.php';

    $pass = $_POST['pass'];
    $title = clean($_POST['title']);
    $date = clean($_POST['date']);
    $by = clean($_POST['by']);
    $loc = clean($_POST['loc']);
    $desc = clean($_POST['desc']);

    if($pass == '' || $title == '' || $date=='' || $by=='' || $loc=='' || $date == ''){
        echo 'fill all fields';
        exit();
    }

    $stmt = $conn->prepare("SELECT password as PASS FROM PASSWORD WHERE passID = 1");
	$stmt->execute();
	$result = $stmt->fetch(PDO::FETCH_OBJ);
    $pwd = $result->PASS;
    if(password_verify($pass, $pwd)){

        $target_dir = "uploads/";
        $target_file = $target_dir . basename($_FILES["file"]["name"]);
        $img = basename($_FILES["file"]["name"]);
        $check = getimagesize($_FILES["file"]["tmp_name"]);
        if($check !== false) {
            $uploadOk = 1;
        } else {
            echo "File is not an image.";
            $uploadOk = 0;
        }

        // Check if file already exists
        if (file_exists($target_file)) {
            echo "Sorry, file already exists.";
            $uploadOk = 0;
        }
        // Check file size
        if ($_FILES["file"]["size"] > 5000000) {
            echo "Sorry, your file is too large.";
            $uploadOk = 0;
        }

        if ($uploadOk == 0) {
            echo "Sorry, your file was not uploaded.";
        // if everything is ok, try to upload file
        } else {
            if (move_uploaded_file($_FILES["file"]["tmp_name"], $target_file)) {
                $stmt = $conn->prepare("INSERT INTO EVENTS(eventTitle, eventDate, eventBy, eventlocation, eventDescription, eventImage)
                VALUES ('".$title."', '".$date."', '".$by."', '".$loc."', '".$desc."', '".$img."')");

                $stmt->execute();
                echo "done";
            } else {
                echo "Sorry, there was an error uploading your file.";
            }
        }
    }
    else{
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