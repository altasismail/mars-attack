<?php

require_once "bddConnect.php";

if(isset($_POST['aydnAdminButton'])) {

    $mail = $_POST["aydnAdminEmail"];
    $pwd = $_POST["aydnAdminPwd"];

    $control = $pdo->prepare("SELECT email, password FROM admin");
    $control->execute();

    while($list = $control->fetch(PDO::FETCH_ASSOC)) {
        if($list['email']===$mail) {
            if($list['password']===$pwd) {
                header("location:../../index.php");
            break;
            } else {
                header("location:../../admin.php");
            break;
            }
        } else if((count($list))-1 != $mail) {
            header("location:../../admin.php");
        }
     }   
}
