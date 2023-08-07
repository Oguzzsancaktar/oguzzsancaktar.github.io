<?php

error_reporting(0);

if (isset($_POST['send'])) {

    $name = $_POST["name"];
    $surname = $_POST["surname"];
    $email = $_POST["email"];
    $phone = $_POST["email"];
    $gender = $_POST["gender"];
    $subject = $_POST["subject"];
    $message = $_POST["message"];
    if ($name && $surname && $email && $phone && $gender && $subject && $message) {
        echo "Ad Soyad : $name $surname <br>";
        echo "E-Mail : $email <br>";
        echo "Phone : $phone <br>";
        echo "Cinsiyet : $gender <br>";
        echo "Konu : $subject <br>";

        echo "<br>Mesaj : $mesaj";
    } else {
        header("Location:/pages/iletisim.html");
    }
} else {
    header("Location:/pages/iletisim.html");
}
?>

