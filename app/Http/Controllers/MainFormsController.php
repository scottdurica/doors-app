<?php

namespace App\Http\Controllers;

use App\Models\MainForm;
use Illuminate\Http\Request;

class MainFormsController extends Controller
{
    public function index() {
        return MainForm::all();
    }
}
