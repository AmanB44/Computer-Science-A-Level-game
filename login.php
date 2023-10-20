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

         <form id="form" action="loginP.php" method="POST">
           <input id="username" type="text" name="username" required placeholder="Enter Username...">
           <input id="password" type="password" name="password" required placeholder="Enter Password...">
           <button type="submit" name="submit">Login</button>

         </form>
    </div>
    <?php
    if (isset($_GET["error"])){
      /*If the username is incorrect*/
      if ($_GET["error"] == "wrongusername") {
        echo "<p>Wrong username</p>";
      }
      /*If the password is incorrect*/
      else if ($_GET["error"] == "wrongpassword") {
        echo "<p>Wrong password</p>";
      }
      /*If there is no error*/
      else if ($_GET["error"] == "none") {
        echo "<p>You have logged in!</p>";
      }
    }
    ?>




    <div id = "footer"> footer </div>
  </body>
</html>           