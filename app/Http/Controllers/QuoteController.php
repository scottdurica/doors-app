<?php

namespace App\Http\Controllers;


use Inertia\Inertia;
use App\Models\Quote;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;


class QuoteController extends Controller

    {
        public function index() {
            
            $id = Auth::id();
            $quotes = Quote::where('user_id', $id)->get();
            
            return Inertia::render('Quotes/All', [
                'quotes' => $quotes
            ]);
        }

        public function create() {
            return Inertia::render('Quotes/Create', [
                'user' => Auth::user()
            ]);
        }

        public function store (Request $request) {
            $validatedData = $request -> validate([
                'user_id' => 'required',
                'quote_type' => 'required',
                'delivery_option' => 'required|string|max:255',
                'c_name' => 'required|string|max:255',
                'f_name' => 'required|string|max:255',
                'l_name' => 'required|string|max:255',
                'street' => 'required|string|max:255',
                'city' => 'required|string|max:255',
                'state' => 'required|string|max:255',
                'zip' => 'required|string|max:255',
                'phone' => 'required|string|max:255',
                'email' => 'required|string|max:255',
                'po_number' => 'required|string|max:255',
                'construction_type' => 'required|string|max:255',
                'style' => 'required|string|max:255',
                'wood_type' => 'required|string|max:255',
                'rs_size' => 'required|string|max:255',
                'rr_size' => 'required|string|max:255',
                'outside_edge' => 'required|string|max:255',
                'hinge_option' => 'required|string|max:255',
                'hinge_distance' => 'required|string|max:255',
                'finish' => 'required|string|max:255',
                'supply_hinges' => 'required',
                'hinge_type' => 'required|string|max:255',
                'notes' => 'required|string|max:255',
                'status' => 'required|string|max:255',
                'doors' => 'required',
            ]);
            $quote = Quote::create($validatedData);

            return(
                response()->json(['Message:' => "data saved bitch", 'data' => $quote])
            );

           
        }


    }
