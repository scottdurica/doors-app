<?php

namespace App\Http\Controllers;
use App\Models\Quote;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;


class QuoteController extends Controller
{
    public function index() {
        $id = Auth::id();
        $quotes = Quote::where('user_id', 9)->get();
        
    }
}
