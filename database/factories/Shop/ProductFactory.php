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
            'product_name' => $this->faker->word(),
            'product_description' => $this->faker->sentence(),
            'slug' => $this->faker->slug(),
            'bought_in' => $this->faker->randomFloat(2, 1, 100),
            'selling_price' => $this->faker->randomFloat(2, 1, 100),
            'visibility' => $this->faker->boolean(),
            'category_id' => \App\Models\Shop\Category::inRandomOrder()->first()->id, 
            'sub_category_id' => \App\Models\Shop\SubCategory::inRandomOrder()->first()->id, 
            'user_id' => \App\Models\User::inRandomOrder()->first()->id, 
        ];
    }
}
