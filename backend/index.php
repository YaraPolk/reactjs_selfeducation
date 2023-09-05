<?php
$servername = "mysql-react";
$username = "react";
$password = "react";
$dbname = "react";

// Создаем соединение
$link = mysqli_connect($servername, $username, $password, $dbname);

// Проверяем соединение
if (!$link) {
    die("Connection failed: " . mysqli_connect_error());
}

mysqli_query($link, "SET NAMES 'utf8'");


$query = 'SELECT * FROM tasks';
$result = mysqli_query($link, $query) or die(mysqli_error($link));

for ($data = []; $row = mysqli_fetch_assoc($result); $data[] = $row);

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');

echo json_encode($data);