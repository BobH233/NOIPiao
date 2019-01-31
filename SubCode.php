<?php
require_once 'model_msg.php';
require_once 'database.php';
function genRandomStr($length = 10) {
    $characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    $randomString = '';
    for ($i = 0; $i < $length; $i++) {
        $randomString .= $characters[rand(0, strlen($characters) - 1)];
    }
    return $randomString;
}
$submiter = $_POST['submiter'];
$content = $_POST['code'];
$lang = $_POST['lang'];
$intro = $_POST['intro'];
$filename = genRandomStr(32);
//echo AddRecord("666","123","code_data/" . $filename . "\.file");
if($submiter == null || $submiter == ""){
    die(mkJson(-1,"提交人不能为空"));
}
//echo $filename;
$filer = fopen("code_data/" . $filename . ".file", "w");
fwrite($filer, $content);
fclose($filer);
$id = AddRecord($submiter,$lang,"code_data/" . $filename . ".file",$intro);
echo mkJson(1,$id);
?>