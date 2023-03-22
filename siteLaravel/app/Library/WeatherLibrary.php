<?php 
namespace App\Library;

use App\Models\Weather;
use Illuminate\Support\Facades\Log;

class WeatherLibrary{
    private $serviceKey = '[API 서비스 키 입력]';
    private $getType = 'json';  

    /**
     * 날씨 가져오기
     */
    function get_weather(int $latitude, int $longitude) {
        /* +900 이상 | -900 이하 값은 Missing값으로 처리됨 */
        /*
            T1H: 기온(℃)
            RN1: 1시간 강수량(mm)
            SKY: 하늘상태(코드)
            UUU: 동서바람성분(m/s)
            VVV: 남북바람성분(m/s)
            REH: 습도(%)
            PTY: 강수형태(코드)
            LGT: 낙뢰(코드)
            VEC: 풍향(참고)
            WSD: 풍속(참고)
        */
    
        try {

            Log::channel('weatherLog')->debug('ㄹㄹ');
        }catch(Exception $e) {
    
        }
    }

    /**
     * 날씨 저장하기
     * 
     * @param String $infoType: xy좌표를 가져올 값의 타입
     *                   xy = xy 좌표를 입력하여 가져옴
     *                   ll = 위도/경도를 입력하여 가져옴
     * @param int $info1: x좌표 또는 latitude(위도)
     * @param int $info2: y좌표 또는 longitude(경도)
     * @param String $scale: 날씨 조회 범위
     *                '' = 모든 범위에서 조회
     *                town = 동네예보조회(3시간 단위)
     *                shortTime = 초단기예보조회(1시간 단위)
     *                shortRealTime = 초단기실황조회(1시간 단위)
     * @param Boolean $realTimeFlag: 현재 시간의 기상정보만 가져올지 구분
     *                               true = 현재 시간의 기상정보만 출력
     *                               false = 모든 시간의 기상정보 출력
     */
    function set_weather(String $infoType, int $info1, int $info2, String $scale='', bool $realTimeFlag=false) {
        try {
            $todayDate = date('Y-m-d H:i:s');

            if(empty($info1)) {
                throw new Exception('Value[1] is empty', -1001);
            }
            if(empty($info2)) {
                throw new Exception('Value[2] is empty', -1002);
            }
    
            // xy좌표 설정
            if($infoType == 'll') {
                $coordinates = dfs_xy_conv('toXY', $info1, $info2);
                $nx = $coordinates['x'];
                $ny = $coordinates['y'];
            } else if($infoType == 'xy') {
                $nx = $info1;
                $ny = $info2;
            } else {
                throw new Exception('Value[0] is not valid', -1003);
            }
    
            // 동네예보조회
            if($scale == '' || $scale == 'town') {
                // $serviceKey, $type, $base_time
                get_townWeather($todayDate, $nx, $ny, $resultCode, $resultMsg, $resultValue, $realTimeFlag, $baseTime);
                if($resultCode != '0') {
                    throw new Exception($resultMsg, $resultCode);
                }
            }
    
            // 초단기예보조회 (1시간 단위)
    
            // 초단기실황조회 (1시간 단위)
        } catch(Exception $e) {

        }

        return $this->serviceKey;   
    }

    /**
     * 동네예보조회 (3시간 단위)
     * 
     * @param String $baseDate: 기상을 조회하려는 날짜
     * @param int $nx: x좌표
     * @param int $ny: y좌표
     * @param Boolean $realTimeFlag: 현재 시간의 기상정보만 가져올지 구분
     *                               true = 현재 시간의 기상정보만 출력
     *                               false = 모든 시간의 기상정보 출력
     * ====== 리턴용 ======
     * @param int $resultCode: 결과 코드
     * @param String $resultMsg: 결과 메세지
     * @param array $resultValue: 결과값
     * @param String $baseTime: 기상을 조회한 시각
     */
    function get_townWeather(String $baseDate, int $nx, int $ny, bool $realTimeFlag, int &$resultCode, String &$resultMsg, array &$resultValue, String &$base_time) {
        try {
            if(empty($baseDate)) {
                throw new Exception('Value[0] is empty', -1001);
            }
            if(empty($nx)) {
                throw new Exception('Value[1] is empty', -1002);
            }
            if(empty($ny)) {
                throw new Exception('Value[2] is empty', -1003);
            }
    
            // 기준시간 설정
            $baseTime = '';
            $ableBaseTime = ['0200', '0500', '0800', '1100', '1400', '1700', '2000', '2300'];
            $ableBaseTimeCnt = count($ableBaseTime);
            $compareBaseTime = date("H00", strtotime($baseDate));
            switch($compareBaseTime) {
                case '0200':
                case '0300':
                case '0400':
                    $baseTime = '0200';
                    break;
                case '0500':
                case '0600':
                case '0700':
                    $baseTime = '0500';
                    break;
                case '0800':
                case '0900':
                case '1000':
                    $baseTime = '0800';
                    break;
                case '1100':
                case '1200':
                case '1300':
                    $baseTime = '1100';
                    break;
                case '1400':
                case '1500':
                case '1600':
                    $baseTime = '1400';
                    break;
                case '1700':
                case '1800':
                case '1900':
                    $baseTime = '1700';
                    break;
                case '2000':
                case '2100':
                case '2200':
                    $baseTime = '2000';
                    break;
                case '2300':
                case '0000':
                case '0100':
                    $baseTime = '2300';
                    break;
            }
            foreach($ableBaseTime as $currAbleTime) {
                if($compareBaseTime <= $currAbleTime) {
                    // 현재 인덱스가 0이거나 1일 때 $index = 0
                    // 그 외                      $index = 인덱스 - 1
                    // ex) 현재 시간: 08:26 ([4]와 비교)
                    //      $baseTime = 0800 ([3] 대입)
                }
            }
        } catch(Exception $e) {
            
        }

        return ['code'=>'00'];
    }

    /**
     * 예보 조회 기준 시간 설정
     * 
     * @param String $type: 예보 종류
     * @param String $baseDate: 기준일 시각
     */
    function set_baseTime(String $type, String $baseDate) {

    }

    /**
     * 좌표 변환(기상청 제공)
     * 
     * @param String $code: 변환 방법
     *                       toXY = 위경도 > 좌표
     *                       toLL = 좌표 > 위경도
     * @param int $v1: 위도 또는 x좌표
     * @param int $v2: 경도 또는 y좌표
     */
    function dfs_xy_conf(String $code, int $v1, int $v2) {
        global $path, $file_name, $who;
      
        /* 위경도/xy좌표 계산할 때 필요한 변수(수정금지) */
        $RE = 6371.00877;   // 지구 반경(km)
        $GRID = 5.0;        // 격자 간격(km)
        $SLAT1 = 30.0;      // 투영 위도1(degree)
        $SLAT2 = 60.0;      // 투영 위도2(degree)
        $OLON = 126.0;      // 기준점 경도(degree)
        $OLAT = 38.0;       // 기준점 위도(degree)
        $XO = 43;           // 기준점 X좌표(GRID)
        $YO = 136;          // 기준점 Y좌표(GRID)
      
        $pi = pi();
        $DEGRAD = $pi / 180.0;
        $RADDEG = 180.0 / $pi;
      
        $re = $RE / $GRID;
        $slat1 = $SLAT1 * $DEGRAD;
        $slat2 = $SLAT2 * $DEGRAD;
        $olon = $OLON * $DEGRAD;
        $olat = $OLAT * $DEGRAD;
      
        $sn = tan($pi * 0.25 + $slat2 * 0.5) / tan($pi * 0.25 + $slat1 * 0.5);
        $sn = log(cos($slat1) / cos($slat2)) / log($sn);
      
        $sf = tan($pi * 0.25 + $slat1 * 0.5);
        $sf = pow($sf, $sn) * cos($slat1) / $sn;
      
        $ro = tan($pi * 0.25 + $olat * 0.5);
        $ro = $re * $sf / pow($ro, $sn);
      
        $rs = array();
      
        if($code == "toXY"){
          $rs['lat'] = $v1;
          $rs['lng'] = $v2;
      
          $ra = tan($pi * 0.25 + $v1 * $DEGRAD * 0.5);
          $ra = $re * $sf / pow($ra, $sn);
      
          $theta = $v2 * $DEGRAD - $olon;
          if($theta > $pi) $theta -= 2.0 * $pi;
          if($theta < -$pi) $theta += 2.0 * $pi;
          $theta *= $sn;
      
          $rs['x'] = floor($ra * sin($theta) + $XO + 0.5);
          $rs['y'] = floor($ro - $ra * cos($theta) + $YO + 0.5);
        }else if($code == "toLL"){
          $rs['x'] = $v1;
          $rs['y'] = $v2;
      
          $xn = $v1 - $XO;
          $yn = $ro - $v2 + $YO;
      
          $ra = sqrt($xn * $xn + $yn * $yn);
          if($sn < 0.0) - $ra;
      
          $alat = pow(($re * $sf / $ra), (1.0 / $sn));
          $alat = 2.0 * atan($alat) - $pi * 0.5;
      
          if(abs($xn) <= 0.0){
            $theta = 0.0;
          }else{
            if(abs($yn) <= 0.0){
              $theta = $pi * 0.5;
              if($xn < 0.0) - $theta;
            }else{
              $theta = atan2($xn, $yn);
            }
          }
          $alon = $theta / $sn + $olon;
      
          $rs['lat'] = $alat * $RADDEG;
          $rs['lng'] = $alon * $RADDEG;
        }
      
        return $rs;
    }
}
?>