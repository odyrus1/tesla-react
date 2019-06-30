<?php

include ('./connection.php');

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: *');
$_POST = json_decode(file_get_contents('php://input'), true);

if(isset($_POST['username'])){
  $login = $_POST['username'];
}
if(isset($_POST['password'])){
  $passwordU = $_POST['password'];
}
if(isset($_POST['email'])){
  $email = $_POST['email'];
}

try {
    $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    if(!empty($login)){
      $statement = $conn->prepare("UPDATE users SET user_name=:username WHERE user_email=:email");
      $statement->execute(array(
          "username" => $login,
          "email" => $email
      ));
    }
    if(!empty($passwordU)){
      $statement = $conn->prepare("UPDATE users SET user_password=:password WHERE user_email=:email");
      $statement->execute(array(
          "password" => $passwordU,
          "email" => $email
      ));
    }
    if(!empty($_POST['idUser'])){
      $statement = $conn->prepare('SELECT * FROM cart WHERE user_id = :idUser');
      $statement->execute(array(
          "idUser" => $_POST['idUser']
      ));
      $cart = $statement->fetch(PDO::FETCH_ASSOC);

      echo json_encode($cart);
    }

    if(!empty($email)){
      $statement = $conn->prepare('SELECT * FROM users WHERE user_email = :email');
      $statement->execute(array(
          "email" => $email
      ));
      $row = $statement->fetch(PDO::FETCH_ASSOC);

      echo json_encode($row);
    }
  }
catch(PDOException $e)
    {
      echo "Connection failed: " . $e->getMessage();
    }

?>
