<?php

function uidExists($conn, $username){
    $sql = "SELECT * FROM userprofiles WHERE userUsername = ?;";
    $stmt = mysqli_stmt_init($conn);
    if (!mysqli_stmt_prepare($stmt, $sql)){
        header("location: ../signUp.php?error=stmtfailed");
        exit();
    }
    mysqli_stmt_bind_param($stmt, "s", $username);
    mysqli_stmt_execute($stmt);

    $resultData = mysqli_stmt_get_result($stmt);
    if ($row = mysqli_fetch_assoc($resultData)){
        return $row;
    }
    else{
        $result = false;
        return $result;
    }

    mysqli_stmt_close($stmt);
}

function createUser($conn, $username, $password){
    $sql = "INSERT INTO userprofiles (userUsername, userPassword) VALUES (?, ?);";
    $stmt = mysqli_stmt_init($conn);
    if (!mysqli_stmt_prepare($stmt, $sql)){
        header("location: ../signUp.php?error=stmtfailed");
        exit();
    }
    $hashedPassword = password_hash($password, PASSWORD_DEFAULT);

    mysqli_stmt_bind_param($stmt, "ss", $username, $hashedPassword);
    mysqli_stmt_execute($stmt);
    mysqli_stmt_close($stmt);
    header("location: ../signUp.php?error=none");
    exit();

}

function loginUser($conn, $username, $password){
    $uidExists = uidExists($conn, $username);
    if ($uidExists == false) {
        header("location: ../login.php?error=wrongusername");
        exit();
    }

    $passwordHashed = $uidExists["userPassword"];
    $checkPassword = password_verify($password, $passwordHashed);
    
    if ($checkPassword === false) {
        header("location: ../login.php?error=wrongpassword");
        exit();
    }

    else if ($checkPassword === true) {
        session_start();
        $_SESSION["userID"] = $uidExists["ID"];
        $_SESSION["Username"] = $uidExists["userUsername"];
        header("location: ../index.php");
        exit();

    }
}

function leaderboard($conn, $username, $timeTaken){
    $sql = "INSERT INTO leaderboard (userUsername, userTime) VALUES (?, ?);";
    $stmt = mysqli_stmt_init($conn);
    if (!mysqli_stmt_prepare($stmt, $sql)){
        header("location: ../signUp.php?error=stmtfailed");
        exit();
    }

    mysqli_stmt_bind_param($stmt, "ss", $username, $timeTaken);
    mysqli_stmt_execute($stmt);
    mysqli_stmt_close($stmt);
    exit();

}

