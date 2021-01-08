<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }

    public function signIn(Request $request){
        $request->validate([
            'SignInEmail' => 'required',
            'SignInPassword' => 'required'          
        ]);
        try{

            
            $user = User::where('email',$request->SignInEmail)->first();
            if($user){
                if(password_verify($request->SignInPassword, $user->password)){
                return response()->json(['message' => 'Login Successfully','status' => 200]);
                }else{
                return response()->json(['message' => 'Invalid Password','status' => 401]);
                }
            }else{
                return response()->json(['message' => 'Invalid credential','status' => 401]);
            }
                 
        }catch(\Exception $e){
            return $e->getMessage();
        }
    }

    public function register(Request $request){
        $request->validate([
            'name' => 'required',
            'email' => 'required',
            'password' => 'required'          
        ]);

        try{
            $user = User::where('email',$request->email)->first();
            if($user != null){
                return response()->json(['message' => 'Email Already Exists','status' => 500]);
            }
            $input['name'] = $request->name;
            $input['email'] = $request->email;
            $input['password'] = password_hash($request->password, PASSWORD_DEFAULT);
            User::create($input);
            return response()->json(['message' => 'Registered Successfully','status' => 200]);

        }catch(\Exception $e){
            return $e->getMessage();
        }

    }
}
