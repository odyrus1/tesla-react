<?php

include ('./connection.php');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: *');
$_POST = json_decode(file_get_contents('php://input'), true);

$idUser = $_POST['idUser'];

try {
    $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    $statement = $conn->prepare('SELECT * FROM cart WHERE user_id = :idUser');
    $statement->execute(array(
        "idUser" => $idUser
    ));
    $cart = $statement->fetch(PDO::FETCH_ASSOC);

    echo json_encode($cart);
}

  }
catch(PDOException $e)
    {
      echo "Connection failed: " . $e->getMessage();
    }

?>
