<?php

//Debug
// echo "Hello";

try {
    $pdo = new PDO("mysql:host=localhost;dbname=mars;charset=utf8","root","");
    //Debug
    echo "Connected Database";
} catch (PDOException $e) {
    die($e->getMessage());
}