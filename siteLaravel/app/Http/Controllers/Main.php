<?php 
namespace App\Http\Controllers;

use App\Http\Controllers\Controller;

class Main extends Controller {
    public function intro() {
        return view('intro/intro')
                ->with([
                    'v2' => 'test'
                ]);
    }
}
?>