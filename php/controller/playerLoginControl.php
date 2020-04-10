<?php

require_once "bddConnect.php";

if(isset($_POST['aydnLoginButton'])) {

    $mail = $_POST["aydnLoginEmail"];
    $pwd = $_POST["aydnLoginPwd"];

    $control = $pdo->prepare("SELECT email, password FROM players");
    $control->execute();

    while($list = $control->fetch(PDO::FETCH_ASSOC)) {
        if($list['email']===$mail) {
            if($list['password']===$pwd) {
                header("location:../../index.php");
            break;
            } else {
                header("location:../../login.php");
            break;
            }
        } else if((count($list))-1 != $mail) {
            header("location:../../login.php");
        }
     }   
}

