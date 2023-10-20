<?php
$servername = "localhost";
$dbusername = "root";
$dbpassword = "";
$dbname = "projectdatabase";


$conn = mysqli_connect($servername, $dbusername, $dbpassword, $dbname);
if (!$conn) {
  die("Connection failed: " . mysqli_connect_error());
}

