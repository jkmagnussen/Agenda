<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\UserController;
use App\Http\Controllers\TaskController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!!
|
*/


Route::group([
    "middleware"=>"api"
], function($router){
    $router->get("/user", [UserController::class, "getUser"]);
    // Needs finishing 
    $router->post("/newusers", [UserController::class, "createUser"]);
    $router->put("/user/{id}", [UserController::class, "updateUser"]);
        
    $router->post("/users/session", [UserController::class, "login"]);
    // Needs finishing 


});

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});