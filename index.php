<?php
 session_start();
?>

<!DOCTYPE html>
<html>
<head>
    <link rel="stylesheet" href = "style.css">
    <meta charset="UTF-8">
    <h1> Castle Defender </h1>
</head>
<table>
<tr>
<th>Id</th>
<th>Username</th>
<th>Password</th>
</tr>
<body>
<div id="navBar">
    <ul>
        <li><a href ="index.php">Home</a></li>
        <?php
            if (isset($_SESSION["Username"])) {
                //These are displayed in the nav bar if the user is logged in
                echo "<li><a href ='game.php'>Game</a></li>";
                echo "<li><a href ='logout.php'>Log out</a></li>";

            }
            else {
                //These are displayed in the nav bar if the user is not logged in
                echo "<li><a href ='signUp.php'>Sign up</a></li>"; 
                echo "<li><a href ='login.php'>Login</a></li>";
            }
        ?>

        
    </ul>
</div>
</body>




