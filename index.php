<!DOCTYPE html>
<html lang="cn">
<head>
    <meta charset="UTF-8">
    <title>NOI嫖·YCOJ 在线剪贴板</title>
    <link rel="stylesheet" href="//cdnjs.loli.net/ajax/libs/mdui/0.4.1/css/mdui.min.css">
    <script src="//cdnjs.loli.net/ajax/libs/mdui/0.4.1/js/mdui.min.js"></script>
    <script type="text/javascript" src="https://code.jquery.com/jquery-2.1.1.min.js"></script>
    <link rel="stylesheet" href="css/simple.css">
    <script src="monaco-editor/min/vs/loader.js"></script>
    <script src="js/simple.js"></script>
  	<meta name="viewport" content="width=1500, initial-scale=0.5, maximum-scale=2.0, minimum-scale=0.12, user-scalable=yes">
</head>
<body class="mdui-theme-accent-blue">
<div class="mdui-container">
    <div class="mdui-row">
        <div class="mdui-col-xs-12" id="backblock">
            <img id="centlogo" src="img/Logo.png" align="center">
            <div class="mdui-typo">
                <hr/>
            </div>
            <div class="mdui-textfield mdui-textfield-floating-label mdui-col-xs-5" style="cursor: text;margin-left: 30px;">
                <label class="mdui-textfield-label"  style="cursor: text;">提交人</label>
                <input id="inputer" class="mdui-textfield-input"  style="cursor: text;"/>
            </div>
            <div class="mdui-textfield mdui-textfield-floating-label mdui-col-xs-5" style="cursor: text;">
                <label class="mdui-textfield-label"  style="cursor: text;">简述内容(题号,问题)</label>
                <input id="introduct" class="mdui-textfield-input"  style="cursor: text;"/>
            </div>
            <select id="langS" class="mdui-select mdui-col-xs-2" mdui-select style="margin-top: 35px;">
                <option value="1">C++</option>
                <option value="2">C#</option>
                <option value="3">JavaScript</option>
                <option value="4" disabled>Python</option>
                <option value="5" disabled>Pascal</option>
                <option value="6" disabled>PHP</option>
            </select>
            <div class="mdui-typo" style="margin-top: 35px;margin-bottom: 35px;">
                <hr/>
            </div>
            <div class="mdui-col-xs-12" style="height: 600px;" id="codes">
                <div id="container" style="height:80%;box-shadow: 0 2px 4px -1px;"></div>
                <button style="margin-top: 20px;" class="mdui-col-offset-xs-1 mdui-btn mdui-btn-block mdui-color-theme-accent mdui-ripple mdui-col-xs-10 " onclick="submit();">提交</button>
            </div>
            <div style="font-size: 20px;text-align: center;margin-bottom: 10px;">本网页由NOIPiao一等奖第一名王YL赞助支持</div>
        </div>
    </div>
</div>
</body>