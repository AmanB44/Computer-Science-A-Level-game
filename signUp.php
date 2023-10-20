<!DOCTYPE html>
<html>
<head>
    <link rel="stylesheet" href = "style.css">
    <script src="project.js"></script>
    <h1> Castle Defender </h1>
</head>

<div id="navBar">
    <ul>
        <li><a href ="index.php">Home</a></li>
        <li><a href ="signUp.php">Sign up</a></li>
        <li><a href ="login.php">Login</a></li>
    </ul>
</div>



        
<body>

    <div class = "login"> 
        
         <form id="form" action="signUpP.php" method="POST">
           <input id="username" type="text" name="username" required placeholder="Enter Username...">
           <input id="password" type="password" name="password" required placeholder="Enter Password...">
           <button type="submit" name="submit">Sign Up</button>

         </form>   
       
    </div>

    <?php
    if (isset($_GET["error"])){
      /*If the sql statement is incorrect*/
      if ($_GET["error"] == "stmtfailed") {
        echo "<p>Something went wrong, try again!</p>";
      }
      /*If the username is taken*/
      else if ($_GET["error"] == "usernametaken") {
        echo "<p>Username already taken</p>";
      }
      /*If there is no error*/
      else if ($_GET["error"] == "none") {
        echo "<p>You have signed up!</p>";
      }

    }
    ?>




    <div id = "footer"> footer </div>
  </body>
</html>           