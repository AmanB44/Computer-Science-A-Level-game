<?php

$stop = round(microtime(true) * 1000);
require_once "start.php";
$username = $_SESSION["Username"];
$timeTaken = $stop - $start;
echo $stop;
echo $start;
echo $timeTaken;
  
require_once "connect.php";
require_once "functions.php";

leaderboard($conn, $username, $timeTaken);

