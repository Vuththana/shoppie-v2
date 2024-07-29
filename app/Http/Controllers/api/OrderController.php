<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Models\Shop\Order;
use Illuminate\Http\Request;

class OrderController extends Controller
{
    public function index() {
        return Order::all();
    }
}
