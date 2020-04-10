<?php

require_once "bddConnect.php";

// Debug
// print_r($_POST);

$nameNew = $_POST['aydnSignUpName'];
$surnameNew = $_POST['aydnSignUpSurname'];
$email = $_POST['aydnSignUpEmail'];
$passd = $_POST['aydnSignUpPwd'];
$passdCnfrm = $_POST['aydnSignUpPwdCnfrm'];


if(!$nameNew || !$surnameNew || !$email || !$passd || !$passdCnfrm) {
    header("location:../../signUp.php");
} else if($passd != $passdCnfrm) {
    header("location:../../signUp.php");
}

$insert = $pdo->prepare("INSERT INTO players SET name = ?, surname = ?, email = ?, password = ?");
$insert->execute([$nameNew,$surnameNew,$email,$passd]);


if($insert) {
    header("location:../../login.php");
} else {
    header("location:../../signUp.php");
}