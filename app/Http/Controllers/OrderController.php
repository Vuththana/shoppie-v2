<?php

namespace App\Http\Controllers;

use App\Models\Shop\Order;
use Illuminate\Http\Request;

class OrderController extends Controller
{
    public function showQrCode(Order $order)
    {
       
        $qrCodeData = $order->generateQrCode(); 
        return view('orders.qr-code', ['qrCodeData' => $qrCodeData]);
    }
}
