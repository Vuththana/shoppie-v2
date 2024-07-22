<?php

namespace Database\Factories\Shop;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Shop\Product>
 */
class ProductFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'product_name' => fake()->word(),
            'product_description' => fake()->paragraph(),
            'slug' => fake()->unique()->slug,
            'stock' => rand(1, 40),
            'bought_in' => fake()->randomFloat(2, 10, 1000),
            'selling_price' => fake()->randomFloat(2, 10, 1000),
            'visibility' => (bool) rand(0,1),
            'category_id' => rand(1,2),
            'sub_category_id' => rand(1,5),
            'user_id' => rand(1,10),
        ];
    }
}
