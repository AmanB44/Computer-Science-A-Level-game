<?php

session_start();
//This frees all session variables
session_unset();
//This destroys all data registered to a session
session_destroy();
header("location: ../index.php");
exit();