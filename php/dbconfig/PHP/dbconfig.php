<?php 
    /*
        Description: MySQL DB 연동
        Parameter:
            $connect: Connect 정보값
            $link_result: 연동 결과
            $server_type: 서버 종류(서버가 여러 개인 경우)
        Return: $result(Array)
    */
    function connect_db(&$connect, $db, $server_type=""){
        $result = array(
            "code"=>0,      /* result code(0 이외의 값은 오류) */
            "message"=>""   /* result message */
        );

        $host = "";         // server ip(xxx.xxx.xxx.xxx)
        $user = "";         // DB user name
        $password = "";     // DB password
        switch($server_type){
            case "serverA":
                $host = "xxx.xxx.xxx.xxx";
                $user = "Aroot";
                $password = "Aroot";
                break;
            default:
                $host = "localhost";
                $user = "root";         
                $password = "root";     
                break;
        }

        $connect = mysqli_connect($host, $user, $password, $db);
        if(!$connect){
            $result['code'] = mysqli_errno($connect);
            $result['message'] = mysqli_error($connect);
        }else{
            // utf8을 사용할 경우 깨짐을 방지하기 위해서 설정
            mysqli_query($connect, "set session character_set_connection=utf8;");
            mysqli_query($connect, "set session character_set_results=utf8;");
            mysqli_query($connect, "set session character_set_client=utf8;");
        }

        return $result;
    }
?>