<?php

include ('./connection.php');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: *');
$_POST = json_decode(file_get_contents('php://input'), true);

if($_POST['idUser']){
  $idUser = $_POST['idUser'];
  $itemName = $_POST['itemName'];
  $itemPrice = $_POST['itemPrice'];

  $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
  $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
  $statement = $conn->prepare("INSERT INTO cart(user_id, item_name, item_price)
      VALUES(:idUser, :itemName, :itemPrice)");
  $statement->execute(array(
      "idUser" => $idUser,
      "itemName" => $itemName,
      "itemPrice" => $itemPrice
  ));
  echo true;
}

try {
    $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $sth = $conn->prepare(" SELECT * FROM shop ");
    $sth->execute();
    $rows = $sth->fetch(PDO::FETCH_ASSOC);
    echo json_encode($rows);
  }
catch(PDOException $e)
{
  echo "Connection failed: " . $e->getMessage();
}

?>
