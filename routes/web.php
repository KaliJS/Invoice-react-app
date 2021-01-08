<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\InvoiceController;
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

Route::get('/', function () {
    return view('welcome');
});


/************Start User Controller***********/
Route::post('/signin', [UserController::class,'signIn']);
Route::post('/register', [UserController::class,'register']);

/************End User Controller***********/


/************Start Invoice Controller***********/
Route::get('/invoice/filter/{data}', [InvoiceController::class,'filterSearch']);
Route::resource('/invoice', InvoiceController::class);
/************End Invoice Controller***********/
