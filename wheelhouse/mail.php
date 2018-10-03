<?php
header("access-control-allow-origin:*"); //allows cross domain

$data = $_REQUEST['data'];

$data = json_decode($data);
// var_dump($data);

$to = "gulmaticokim@yahoo.com, mikeniad28@gmail.com";
$subject = "Wheelhouse";

$message = "
<html>
<head>
<title>Wheelhouse</title>
</head>
<body>
<style>
table, td {
    border: 1px solid black;
}
</style>
<p>Someone requested a quote!</p>
<table style='width:100%'>
<tr>
<td>Fullname</td>
<td>$data->fullname</td>
</tr>
<tr>
<td>Company</td>
<td>$data->cpnyname</td>
</tr>
<tr>
<td>Email</td>
<td>$data->email</td>
</tr>
<tr>
<td>Phone</td>
<td>$data->mobile</td>
</tr>
<tr>
<td>Notes</td>
<td>$data->notes</td>
</tr>
<tr>
<td>What is your ideal space?</td>
<td>$data->aval</td>
</tr>
<tr>
<td>When do you need it?</td>
<td>$data->bval<</td>
</tr>
<tr>
<td>For how long do you need it?</td>
<td>$data->cval<</td>
</tr>
<tr>
<td>How big is your team?</td>
<td>$data->dval<</td>
</tr>
</table>
</body>
</html>
";

// Always set content-type when sending HTML email
$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";

// More headers
$headers .= 'From: <webmaster@example.com>' . "\r\n";

mail($to,$subject,$message,$headers);
echo "Sent!";
?>
