<?php

$login = $_POST['login'];
$password = $_POST['password'];

if(empty($login) || empty($password)) {
	echo "Error";
} else {
	echo "Вы используете логин $login и пароль $password";
}

$filename = 'sendFilms.txt';
$text = "Вы используете логин $login и пароль $password";
file_put_contents($filename, $text, FILE_APPEND);