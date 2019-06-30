<?php
include('connection.php');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: *');
$_POST = json_decode(file_get_contents('php://input'), true);

try {
    $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    $email = $_POST['email'];
    $password = $_POST['password'];

    $statement = $conn->prepare('SELECT * FROM users WHERE user_email = :email AND user_password = :password');
    $statement->execute(array(
        "email" => $email,
        "password" => $password,
    ));
    $row = $statement->fetch(PDO::FETCH_ASSOC);

    if($row){
      echo json_encode($row);
    } else {
      echo false;
    }

  }
catch(PDOException $e)
    {
      echo "Connection failed: " . $e->getMessage();
    }

?>
