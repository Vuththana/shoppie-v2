<?php

use App\Http\Controllers\api\OrderController;
use App\Http\Controllers\api\ProductController;
use App\Http\Resources\ProductResource;
use App\Models\Shop\Order;
use App\Models\Shop\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


Route::apiResource('/orders', OrderController::class);

Route::get('/products', function() {
    $users = Product::orderBy('product_name')->get();

    return ProductResource::collection($users);
 });

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');
