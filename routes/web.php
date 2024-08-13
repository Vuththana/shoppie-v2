<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\OrderController;

Route::get('/', function () {
    return Inertia::render('Welcome');
});

Route::get('/product', function () {
    return Inertia::render('HomePage');
});


Route::apiResource('reviews', 'ReviewController');
Route::get('/orders/{order}/qr-code', [OrderController::class, 'showQrCode'])->name('qr-code');

require __DIR__.'/auth.php';

Route::get('/order', function() {
    return Inertia::render('Shop/OrderPage');
});