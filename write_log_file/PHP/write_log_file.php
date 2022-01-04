<?php 
    /*
        Description: 로그 파일을 작성합니다
        Parameter:
            $debug_message: 디버깅 메시지
            $log_file_path: 로그 파일을 저장할 경로
            $log_file_name: 로그 파일명
            $who_call: 디버깅 메시지를 작성한 위치 구분
    */
    function write_log($debug_message, $log_file_path, $who_call, $log_file_name=""){
        $log_max_size = 30000000;   // 30MB     // 로그 파일의 최대 사이즈

        if(!$log_file_path) $log_file_path = $_SERVER['DOCUMENT_ROOT'];
        if(!$who_call) $who_call = "Missing";
        
        // 로그 파일
        $log_file = "{$log_file_path}/log/DEBUGGING_{$log_file_name}.log";

        // 로그 파일 사이즈 확인
        if(!file_exists($log_file)){
            $log_file_size = 0;
        }else{
            $log_file_size = filesize($log_file);
        }

        // 로그 파일 사이즈가 최대 사이즈보다 크면 내용을 삭제 후 처음부터 작성한다, 그렇지 않으면 파일 끝에 이어서 작성한다
        if($log_file_size >= $log_max_size){
            $log_file_open = fopen($log_file, "w");
        }else{
            $log_file_open = fopen($log_file, "a");
        }

        if($log_file_open){
            // 로그 파일 내용 작성
            $current_time = date("Y-m-d H:i:s", time());
            
            fwrite($log_file_open, "\n> {$current_time}>{$who_call}: {$debug_message}");
            fclose($log_file_open);
        }

        // 파일 관련 정보를 지움(다음에 실행할 때 파일 사이즈를 정확히 읽어오기 위함)
        clearstatcache();
    }
?>