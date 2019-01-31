<?php
$fi = $_GET['fff'];
$filer = fopen($fi,"r");
$cont = fread($filer,filesize($fi));
fclose($filer);
echo $cont;
?>