<?php
namespace App\Http\Controllers;

use App\Http\Controllers\Controller;

class MycodeController extends Controller {
    public function intro() {
        return view('mycode/intro');
    }

    public function scheduleManager() {
        return view('mycode/schedule');
    }
}
?>