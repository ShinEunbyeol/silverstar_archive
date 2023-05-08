<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\MainController;
use App\Http\Controllers\MycodeController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::get('/', function () {
//     return view('welcome');
// });

Route::get('/', function() {
    return redirect('/intro');
});
Route::get('/intro', [MainController::class, 'intro']);

Route::get('/mycode', function() {
    return redirect('/mycode-intro');
});
Route::get('/mycode-intro', [MycodeController::class, 'intro']);
Route::get('/mycode-schedule', [MycodeController::class, 'scheduleManager']);
Route::get('/mycode-permission', [MycodeController::class, 'permissionManager']);
Route::get('/mycode-target', [MycodeController::class, 'targetSystem']);