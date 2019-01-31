<?php
require_once 'DB_config.php';
$mysqli = null;
function Connect(){
    global $mysqli;
    $mysqli = new mysqli(DB_server_ip,DB_username,DB_password,DB_name);
    if(!$mysqli){
        echo '连接失败';
    }
}
function Close(){
    global $mysqli;
    $mysqli -> Close();
}
function AddRecord($submiter,$lang,$filename1,$intro){
/*
 * INSERT INTO `www_noipiao_cf`.`record` (`ID`, `Submiter`, `lang`, `filename`, `Time`) VALUES ('1', 'root', 'c++', 'abcsd.file', CURRENT_TIMESTAMP)
 * */
global $mysqli;
$id = 0;
$sql = "INSERT INTO `". DB_name ."`.`record` (`Submiter`, `lang`, `filename`, `Time`, `intro`) VALUES ('{$submiter}', '{$lang}', '{$filename1}', CURRENT_TIMESTAMP, '{$intro}')";
//echo $sql;
$sql1 = "select LAST_INSERT_ID()";
Connect();
$mysqli->query($sql);
$res1 = $mysqli->query($sql1);
Close();
return $res1->fetch_row()[0];
}
function GetFilename($id){
global $mysqli;
//SELECT * FROM `record` WHERE `ID` = 3
$sql = "SELECT * FROM `". DB_record ."` WHERE `ID` = {$id}";
//echo $sql;
Connect();
$res1 = $mysqli -> query($sql);
//var_dump($res1);
$row = $res1->fetch_row();
if(count($row) < 1){
    return "nullfile";
}
return $row[4];
Close();
}
function GetFileSubmiter($id){
    global $mysqli;
//SELECT * FROM `record` WHERE `ID` = 3
    $sql = "SELECT * FROM `". DB_record ."` WHERE `ID` = {$id}";
    Connect();
    $res = $mysqli->query($sql);
    $row = $res->fetch_row();
    if(count($row) < 1){
        return "nullfile";
    }
    return $row[1];
    Close();
}
function GetFilelang($id){
    global $mysqli;
//SELECT * FROM `record` WHERE `ID` = 3
    $sql = "SELECT * FROM `". DB_record ."` WHERE `ID` = {$id}";
    Connect();
    $res = $mysqli->query($sql);
    $row = $res->fetch_row();
    if(count($row) < 1){
        return "nullfile";
    }
    return $row[2];
    Close();
}
function Getintrolang($id){
    global $mysqli;
//SELECT * FROM `record` WHERE `ID` = 3
    $sql = "SELECT * FROM `". DB_record ."` WHERE `ID` = {$id}";
    Connect();
    $res = $mysqli->query($sql);
    $row = $res->fetch_row();
    if(count($row) < 1){
        return "nullfile";
    }
    return $row[3];
    Close();
}
function GetFileTime($id){
    global $mysqli;
//SELECT * FROM `record` WHERE `ID` = 3
    $sql = "SELECT * FROM `". DB_record ."` WHERE `ID` = {$id}";
    Connect();
    $res = $mysqli->query($sql);
    $row = $res->fetch_row();
    if(count($row) < 1){
        return "nullfile";
    }
    return $row[5];
    Close();
}
?>