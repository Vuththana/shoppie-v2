<?php

namespace Database\Factories\Shop;

use App\Models\Shop\Review;
use App\Models\Shop\Product;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Shop\Review>
 */
class ReviewFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'comment' => $this->faker->paragraph(),
            'rating' => $this->faker->numberBetween(1, 5),
            'user_id' => User::inRandomOrder()->first()->id, 
            'product_id' => Product::inRandomOrder()->first()->id, 
        ];
    }
}
