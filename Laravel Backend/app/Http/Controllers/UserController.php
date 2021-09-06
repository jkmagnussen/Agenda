<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Validator; 
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function __invoke(Request $request)
    {
        //
    }

    public function createUser(Request $request){
        $validator = Validator::make($request->post(),["name"=>"required|unique:Users|max:35", "password"=>"required|max:120|min:8", "email"=>"required|email:rfc,dns"]);
        if($validator->fails()){ return response()->json($validator->errors());}
        $user = User::create($request->only(["name", "password", "email"]));
    }
}