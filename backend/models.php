<?php

include ('./connection.php');

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: *');
$_POST = json_decode(file_get_contents('php://input'), true);

$model = $_POST['model'];

try {
    $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $statement = $conn->prepare('SELECT * FROM tesla_models WHERE model_name = :model');
    $statement->execute(array(
        "model" => $model,
    ));
    $row = $statement->fetch(PDO::FETCH_ASSOC);
    echo json_encode($row);
  }
catch(PDOException $e)
{
  echo "Connection failed: " . $e->getMessage();
}

?>
