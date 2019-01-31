<?php
require_once 'database.php';
$handle = $_GET['id'];
if(!isset($_GET['id'])){
    header("HTTP/1.1 404 Not Found");
    die();
}
$filename = GetFilename($handle);
//echo $filename;

if($filename == "nullfile"){
    header("HTTP/1.1 404 Not Found");
    die();
}
$submiter = GetFileSubmiter($handle);
$lang = GetFilelang($handle);
$time = GetFileTime($handle);
$intro = Getintrolang($handle);
?>

<!DOCTYPE html>
<html lang="cn">
<head>
    <meta charset="UTF-8">
    <title>NOI嫖·YCOJ 在线剪贴板</title>
    <link rel="stylesheet" href="//cdnjs.loli.net/ajax/libs/mdui/0.4.1/css/mdui.min.css">
    <script src="//cdnjs.loli.net/ajax/libs/mdui/0.4.1/js/mdui.min.js"></script>
    <script type="text/javascript" src="https://code.jquery.com/jquery-2.1.1.min.js"></script>
    <link rel="stylesheet" href="./css/simple.css">
    <script src="./monaco-editor/min/vs/loader.js"></script>
    <script src="./js/simple2.js"></script>
  	<meta name="viewport" content="width=1500, initial-scale=0.5, maximum-scale=2.0, minimum-scale=0.12, user-scalable=yes">
</head>
<body class="mdui-theme-accent-blue">
<div class="mdui-container">
    <div class="mdui-row">
        <div class="mdui-col-xs-12" id="backblock">
            <img id="centlogo" src="./img/Logo.png" align="center">
            <div class="mdui-typo">
                <hr/>
            </div>
            <div class="submitter" id="submitter" style="margin-top: -10px;font-size:30px;margin-left: 20px;float: left;">提交人:<?php echo $submiter;?></div>
            <div class="submitter" id="submitter1" style="margin-top: -10px;font-size:30px;margin-left: 20px;float: left;">语言:<?php echo $lang;?></div>
            <div class="submitter" id="submitter3" style="margin-top: -10px;font-size:30px;margin-left: 20px;float: left;">时间:<?php echo $time;?></div>
            <button class="mdui-btn mdui-color-theme-accent mdui-ripple" style="margin-top: 20px;margin-left: 20px;" onclick="showintro();">查看代码介绍</button>
          	<button class="mdui-btn mdui-color-theme-accent mdui-ripple" style="margin-top: 20px;margin-left: 20px;" onclick="copy();">复制代码</button>
            <div class="mdui-col-xs-12" style="height: 600px;" id="codes">
                <div id="container" style="height:90%;box-shadow: 0 2px 4px -1px;"></div>
            </div>
            <div style="height: 10px;"></div>

        </div>
    </div>
</div>
<script>
    var content = "";
    $.ajax({
        url: './view.php?fff='+"<?php echo $filename?>",
        type: 'GET',
        async: false,
        timeout: 3000,
        dataType: 'text',
        success: function (data, textStatus, jqXHR) {
            content = data;
        }
    });
    //console.log(editor);
    function go(){
        editor.setValue("" + content);
    }
    function showintro(){
        mdui.alert("<?php echo $intro?>");
    }
  function copyToClipboard(s){
   if(window.clipboardData){
      window.clipboardData.setData('text',s);
   }else{
      (function(s){
         document.oncopy=function(e){
            e.clipboardData.setData('text',s);
            e.preventDefault();
            document.oncopy=null;
         }
      })(s);
      document.execCommand('Copy');
   }
}
  	function copy(){
    	copyToClipboard(content);
    }
</script>
</body>

