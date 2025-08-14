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
            return Inertia::render('Quotes/Create');
        }
    }
