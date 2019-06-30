<?php

include ('./connection.php');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: *');

try {
    $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $sth = $conn->prepare(" SELECT * FROM tesla_cars ");
    $sth->execute();
    $rows = $sth->fetch(PDO::FETCH_ASSOC);
    echo json_encode($rows);
  }
catch(PDOException $e)
{
  echo "Connection failed: " . $e->getMessage();
}

?>
