<?php
header('Access-Control-Allow-Origin:http://localhost:8080');
header('Access-Control-Allow-Headers: X-Requested-With, Content-Type');
include 'mysqli.php';
$ret = array('error_code' => 0, 'error_msg' => '');

$req = isset($_POST['title']) ? $_POST : $_GET;
$title = isset($req['title']) ? trim($req['title']) : '';
$content = isset($req['content']) ? trim($req['content']) : '';
$db = new DB();
$data = array(
	'topic' => $title,
	'content' => $content,
	'author' => 'zhengxinxin',
	'create_time' => date('y-m-d H:i:s'),
);
$id = $db->insert('article', $data);
$ret['data'] = $id;
die(json_encode($data));
?>