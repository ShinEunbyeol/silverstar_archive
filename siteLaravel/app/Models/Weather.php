<?php

/**
 * a. 'weatherLog' 로그 채널 사용
 * b. 에러 로그는 반드시 출력됨 / 디버그 로그는 $useDebug 변수로 설정 가능
 */

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

class Weather extends Model
{
    /**
     * The table associated with the model.
     * 
     * @var string
     */
    protected $table = 'weather';

    /**
     * The primary key associated with the table.
     * 
     * @var string
     */
    protected $primaryKey = 'id';

    /**
     * 디버깅 로그 사용 여부(true/false)
     */
    protected $useDebug = true;

    /**
     * 특정 날짜 이전의 날씨 정보를 삭제함
     */
    function delete_weather(String $minDate) {
        try {
            DB::beginTransaction();

            $todayTime = date('Y-m-d H:i:s');

            $deletedCnt = Weather::where(DB::raw('DATE(created_at)'), '<', $minDate)->delete();
            if($useDebug) {
                Log::channel('weatherLog')->debug("({$todayTime}) 총 {$deletedCnt}개의 날씨 정보 삭제 - \$minDate={$minDate}");
            }

            DB::commit();
        }catch(Exception $e) {
            DB::rollBack();
            Log::channel('weatherLog')->error('날씨 삭제 오류');
        }
    }
}
