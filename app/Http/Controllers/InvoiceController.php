<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Invoice;

class InvoiceController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        try{
            $invoices = Invoice::orderBy('id')->get();
            return response()->json(['invoices' => $invoices,'status' => 200]);
        }catch(\Exception $e){
            return $e->getMessage();
        }
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
         $request->validate([
            'name' => 'required',
            'description' => 'required',
            'quantity' => 'required',
            'number_of_units' => 'required',
            'unit_price' => 'required',
            'discount' => 'required',
            'tax' => 'required'
        ]);
        
        try{
            $input = $request->all();
            $invoice=Invoice::create($input);

            return response()->json(['message' => 'Invoice Created Successfully','status' => 200]);


        }catch(\Exception $e){
            return $e->getMessage();
        }
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
        try{
            $invoice = Invoice::where('id',$id)->first();
            return response()->json(['invoice' => $invoice,'status' => 200]);
        }catch(\Exception $e){
            return $e->getMessage();
        }
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
        $request->validate([
            'name' => 'required',
            'description' => 'required',
            'quantity' => 'required',
            'number_of_units' => 'required',
            'unit_price' => 'required',
            'discount' => 'required',
            'tax' => 'required'
        ]);
        
        try{
            $input['name'] = $request->name;
            $input['description'] = $request->description;
            $input['quantity'] = $request->quantity;
            $input['number_of_units'] = $request->number_of_units;
            $input['unit_price'] = $request->unit_price;
            $input['discount'] = $request->discount;
            $input['tax'] = $request->tax;
            $invoice=Invoice::where('id',$id)->update($input);

            return response()->json(['message' => 'Invoice Updated Successfully','status' => 200]);

        }catch(\Exception $e){
            return $e->getMessage();
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        try{
            $invoice = Invoice::where('id',$id)->delete();
            return response()->json(['message' => 'Invoice Deleted Successfully','status' => 200]);
        }catch(\Exception $e){
            return $e->getMessage();
        }
    }

    public function filterSearch($data)
    {
        $invoices = Invoice::where('name','LIKE','%'.$data.'%')->get();
        return response()->json(['invoices' => $invoices,'status' => 200]);
    }
}
