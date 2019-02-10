<?php

$title = $_POST['title'];
$year = $_POST['year'];
$rating = $_POST['rating'];
$info = $_POST['info'];
$dramaRating= $_POST['dramaRating'];
$comedyRating= $_POST['comedyRating'];
$actionRating= $_POST['actionRating'];
$fantasyRating= $_POST['fantasyRating'];
$adventureRating= $_POST['adventureRating'];
$actors=$_POST['actors'];
$payment=$_POST['payment'];

var_dump($_POST);

$filename = 'sendFilms.txt';
$text = "payment: $payment;title: $title;year: $year;info: $info;dramaRating: $dramaRating;comedyRating: $comedyRating;actionRating: $actionRating;fantasyRating: $fantasyRating;adventureRating: $adventureRating;actors: $actors.";
file_put_contents($filename, $text, FILE_APPEND);

header ('Location: thx.html');
exit();