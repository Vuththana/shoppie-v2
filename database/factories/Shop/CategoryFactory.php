<?php

namespace Database\Factories\Shop;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Shop\Category>
 */
class CategoryFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'category_name' => fake()->word(),
            'category_description' => fake()->paragraph(),
            'visibility' => (bool) rand(0,1),
            'slug' => fake()->unique()->slug,
            'user_id' => 1,
        ];
    }
}
