<?php

include ('./connection.php');

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: *');
$_POST = json_decode(file_get_contents('php://input'), true);

$login = $_POST['username'];
$email = $_POST['email'];
$passwordU = $_POST['password'];

try {
    $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    $statement = $conn->prepare('SELECT * FROM users WHERE user_email = :email');
    $statement->execute(array(
        "email" => $email,
    ));
    $row = $statement->fetch(PDO::FETCH_ASSOC);

    if(!$row)
    {
      $statement = $conn->prepare("INSERT INTO users(user_name, user_email, user_password)
          VALUES(:username, :email, :password)");
      $statement->execute(array(
          "username" => $login,
          "email" => $email,
          "password" => $passwordU
      ));
      echo true;
    } else {
      echo false;
    }

  }
catch(PDOException $e)
    {
      echo "Connection failed: " . $e->getMessage();
    }

?>
