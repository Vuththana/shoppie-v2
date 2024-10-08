<?php

namespace App\Http\Controllers;

use App\Models\Shop\Review;
use Illuminate\Http\Request;

class ReviewController extends Controller
{
    /**
     * Display a listing of the reviews.
     */
    public function index()
    {
        return Review::all();
    }

    /**
     * Store a newly created review in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'comment' => 'required|string',
            'rating' => 'required|integer|min:1|max:5',
            'product_id' => 'required|exists:products,id',
            'user_id' => 'required'
        ]);

        $review = Review::create([
            'comment' => $validated['comment'],
            'rating' => $validated['rating'],
            'user_id' => $request->user_id,
            'product_id' => $validated['product_id'],
        ]);

        return response()->json($review, 201);
    }

    /**
     * Display the specified review.
     */
    public function show($id)
    {
        $review = Review::findOrFail($id);
        return response()->json($review);
    }

    public function getReviewsByProduct($product_id)
{
    $reviews = Review::where('product_id', $product_id)
        ->with('user') // Eagerly load the user relationship
        ->get();

    if ($reviews->isEmpty()) {
        return response()->json(['message' => 'No reviews found'], 404);
    }

    return response()->json($reviews, 200);
}



    /**
     * Update the specified review in storage.
     */
    public function update(Request $request, $id)
    {
        $review = Review::findOrFail($id);
        $validated = $request->validate([
            'comment' => 'sometimes|required|string',
            'rating' => 'sometimes|required|integer|min:1|max:5',
            'product_id' => 'sometimes|required|exists:products,id',
        ]);

        $review->update($validated);
        return response()->json($review);
    }

    /**
     * Remove the specified review from storage.
     */
    public function destroy($id)
    {
        $review = Review::findOrFail($id);
        $review->delete();
        return response()->json(null, 204);
    }
}
