<?php
/**
 *
 * @authors Your Name
 * Login 逻辑
 */
header('Access-Control-Allow-Origin:http://localhost:8080');
header('Access-Control-Allow-Headers: X-Requested-With, Content-Type');

$data = array("data" => true);
die(json_encode($data));

?>