<?php

require_once "bddConnect.php";


$requetSQL = 
<<<CODESQL
SELECT  email, password FROM players   
CODESQL;

$pdoStatement = $pdo->prepare($requetSQL);
$pdoStatement->execute();

$tabAssociatif = $pdoStatement->fetchAll(PDO::FETCH_ASSOC);

$codeJSON = json_encode($tabAssociatif, JSON_PRETTY_PRINT);

echo $codeJSON;