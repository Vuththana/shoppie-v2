<?php

namespace App\Http\Controllers\api;

use Inertia\Inertia;
use App\Models\Shop\Product;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class ProductController extends Controller
{
    public function index()
    {
        return Product::all();
    }

    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'image' => 'nullable|string',
            'product_name' => 'required|string|max:255',
            'product_description' => 'nullable|string',
            'slug' => 'required|string|max:255|unique:products,slug',
            'stock' => 'required|integer',
            'sku' => 'required|string|max:100|unique:products,sku',
            'selling_price' => 'required|numeric',
            'bought_in' => 'nullable|numeric',
            'visibility' => 'required|boolean',
            'category_id' => 'required|exists:categories,id',
            'sub_category_id' => 'nullable|exists:sub_categories,id',
            'user_id' => 'required|exists:users,id',
        ]);

        $product = Product::create($validatedData);

        return response()->json($product, 201);
    }

    public function show($id)
    {
        $product = Product::findOrFail($id);

        if (request()->is('api/*')) {
            return response()->json($product);
        } else {
            return Inertia::render('ProductDetail', [
                'product' => $product
            ]);
        }
    }


    public function update(Request $request, $id)
    {
        $product = Product::findOrFail($id);

        $validatedData = $request->validate([
            'image' => 'nullable|string',
            'product_name' => 'required|string|max:255',
            'product_description' => 'nullable|string',
            'slug' => 'required|string|max:255|unique:products,slug,' . $product->id,
            'stock' => 'required|integer',
            'sku' => 'required|string|max:100|unique:products,sku,' . $product->id,
            'selling_price' => 'required|numeric',
            'bought_in' => 'nullable|numeric',
            'visibility' => 'required|boolean',
            'category_id' => 'required|exists:categories,id',
            'sub_category_id' => 'nullable|exists:sub_categories,id',
            'user_id' => 'required|exists:users,id',
        ]);

        $product->update($validatedData);

        return response()->json($product, 200);
    }

    public function destroy($id)
    {
        $product = Product::findOrFail($id);
        $product->delete();

        return response()->json(null, 204);
    }
}
