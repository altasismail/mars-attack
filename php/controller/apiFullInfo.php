<?php

require_once "bddConnect.php";


$requetSQL = 
<<<CODESQL
SELECT * FROM players
CODESQL;

$pdoStatement = $pdo->prepare($requetSQL);
$pdoStatement->execute();

$tabAssociatif = $pdoStatement->fetchAll(PDO::FETCH_ASSOC);

$codeJSON = json_encode($tabAssociatif, JSON_PRETTY_PRINT);