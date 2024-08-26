<?php

namespace App\Http\Controllers;

use App\Models\Shop\Review;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class HotProductController extends Controller
{
    public function index()
    {
        $products = DB::table('reviews')
        ->select('products.id as product_id', 'products.image', 'products.product_name', 'products.product_description', 'products.stock', 'products.selling_price', DB::raw('COUNT(reviews.id) as review_count'))
        ->join('products', 'reviews.product_id', '=', 'products.id')
        ->groupBy('products.id', 'products.image', 'products.product_name', 'products.product_description', 'products.stock', 'products.selling_price')
        ->havingRaw('COUNT(reviews.id) > 5') 
        ->get();

        return response()->json($products);
    }
}   