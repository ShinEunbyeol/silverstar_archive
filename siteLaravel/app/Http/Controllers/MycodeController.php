<?php
namespace App\Http\Controllers;

use App\Http\Controllers\Controller;

class MycodeController extends Controller {
    public function list() {
        return view('mycode/list');
    }
}
?>