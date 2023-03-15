<?php 
namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Library\WeatherLibrary;

class Main extends Controller {
    public function index() {
        $weatherLibrary = new WeatherLibrary();
        // $test = $weatherLibrary->set_weather('a', 1, 1);
        // $v1 = date("Hi", strtotime(date("YmdHis")));
        $v2 = var_dump(strtotime(date('Ymd'))); // sayHello();

        return view('index')
                ->with([
                    // 'test' => $test,
                    // 'v1' => $v1,
                    'v2' => $v2
                ]);
    }
}
?>