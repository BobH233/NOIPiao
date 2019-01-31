<?php
    class Msg{
        public $msgcode = 0;
        /* msgcode:
            -1:error
            0:success
            1:banned
            2:loginned
        */
        public $msg = "";
    }
    function mkJson($msgCode ,$msg){
        $tmp = new Msg();
        $tmp->msgcode = $msgCode;
        $tmp->msg = $msg;
        return json_encode($tmp);
    }
?>