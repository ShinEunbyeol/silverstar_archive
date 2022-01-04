#!/usr/bin/php
<!-- 실행 환경(실행 명령어)을 명시하면 쉘 스크립트로서 직접 실행할 수 있기때문에 반드시 1번째 줄에 작성한다 -->
<?php 
    /*
        Description
            - Linux Crontab에서 스크립트로 실행되는 파일입니다
        
        API 결과값 문자 의미
        => 자세한 사항은 README.md 참고
            T1H : 기온(℃)
            RN1 : 1시간 강수량(mm)
            SKY : 하늘 상태(코드)
            UUU : 동서 바람 성분(m/s)
            VVV : 남북 바람 성분(m/s)
            REH : 습도(%)
            PTY : 강수 형태(코드)
            LGT : 낙뢰(코드)
            VEC : 풍향(참고)
            WED : 풍속(참고)
        * +900이상, -900이하 값은 Missing값으로 처리됨
    */

    header("Content-Type: text/html; charset=UTF-8");   // 서버가 utf-8이 아닐 때, 코드 깨짐을 방지하기 위해서 작성한다
    date_default_timezone_set("Asia/Seoul");

    include_once "/silverstar_archive/dbconfig/PHP/dbconfig.php";

    try{
        // DB 접속
        $db_name = "weather";   // [수정]
        $connect_db_result = connect_db($connect_db, $db_name);
        if($connect_db_result['code'] != 0) throw new Exception("DB 접속 오류", -1001);

        // [수정] 날씨 관련 테이블 정보
        $weather_info_table = "weather_info";
        // -------------- END

        // [선택] 2일 이상 지난 날씨 정보는 삭제함
        $two_days_ago = date("Y-m-d", strtotime("-2 day"));
        $weather_info_delete_sql = "DELETE FROM {$weather_info_table} WHERE DATE(regdate) < '{$two_days_ago}'";
        $result = mysqli_query($connect_db, $weather_info_delete_sql);
        if($result == false) throw new Exception("2일 지난 날씨 삭제 오류", -1002);
        // -------------- END

        // 지역 위도(latitude) / 경도(longitude)
        //! "참고파일" 파일 참고(파일명 정한 뒤에 수정하기)
        $latitude = 0;
        $longitude = 0;

        $save_weather = set_weather($connect_db, "??", $latitude, $longitude, "", "", 0);
    }catch(Exception $e){
        $result = "FAIL";
        $result_code = $e->getCode();
        $result_msg = $e->getMessage();
        $result_value = "";
    }
?>