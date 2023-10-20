<?php

if (isset($_POST["submit"])) {
    //Assigning variables to the ones submitted in the form
    $username = $_POST["username"];
    $password = $_POST["password"];

    
    require_once "connect.php";
    require_once "functions.php";
    
    //Checking if the user exists
    if (uidExists($conn, $username) !== false) {
        header("location: ../signUp.php?error=usernametaken");
        exit();
    }
    //Creating the user
    createUser($conn, $username, $password);
}

else {
    header("location: ../signup.php");
    exit();
}
