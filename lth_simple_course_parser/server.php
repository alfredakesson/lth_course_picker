<?php

$jsonData = file_get_contents('../jsonData/datateknik.json');

/* Output header */
header('Content-Type: application/json');

// Return json-data
echo $jsonData;

?>