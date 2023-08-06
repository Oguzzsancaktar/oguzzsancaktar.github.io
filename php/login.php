<?php

error_reporting(0);

if (isset($_POST['login'])) {
    $DEFAULT_USERNAME = "oguz";
    $DEFAULT_PASSWORD = "12345";
    $username = $_POST["username"];
    $password = $_POST["password"];
    if ($username != "" && $password != "") {
        if ($username == $DEFAULT_USERNAME && $password == $DEFAULT_PASSWORD) {
            echo "Hoşgeldiniz <br><hr>";
            echo "$username";
        } else {
            header("Location:/pages/login.html");
        }
    } else {
        header("Location:/pages/login.html");
    }
} else {
    header("Location:/pages/login.html");
}
?>

