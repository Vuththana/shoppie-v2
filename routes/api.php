<?php

use App\Http\Controllers\api\CategoryController;
use App\Http\Controllers\api\OrderController;
use App\Http\Controllers\ReviewController;
use App\Http\Controllers\api\ProductController;
use App\Http\Controllers\HotProductController;
use App\Http\Controllers\UserController;
use App\Http\Resources\CategoryResource;
use App\Http\Resources\ProductResource;
use App\Models\Shop\Category;
use App\Models\Shop\Order;
use App\Models\Shop\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


Route::apiResource('/orders', OrderController::class);

// Route::get('/products', function() {
//     $users = Product::orderBy('product_name')->get();
//     return ProductResource::collection($users);
//  });
Route::apiResource('/products', ProductController::class);
Route::get('/products/{id}', [ProductController::class, 'show']);

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');
Route::get('users/{id}', [UserController::class, 'show']);

route::get('/reviews/{product_id}', [ReviewController::class, 'getReviewsByProduct']);
Route::apiResource('/reviews', ReviewController::class);

// Scope Hot Products Api
Route::apiResource('/hot-products', HotProductController::class);

Route::apiResource('/categories', CategoryController::class);