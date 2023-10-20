<?php

if (isset($_POST["submit"])) {
    //Assigning variables to the ones submitted in the form
    $username = $_POST["username"];
    $password = $_POST["password"];

    
    require_once "connect.php";
    require_once "functions.php";
    
    //Logging in the user
    loginUser($conn, $username, $password);

}
else {
    header("location: ../login.php");
    exit();
}