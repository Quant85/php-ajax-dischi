<?php
require_once "db.php";

header('Content-Type: application/json; charset=UTF-8');
$database = json_encode($data);
echo $database;
?>
