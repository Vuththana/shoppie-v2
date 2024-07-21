<?php

namespace Database\Factories\Shop;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Shop\SubCategory>
 */
class SubCategoryFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'sub_category_name' => fake()->word(),
            'sub_category_description' => fake()->paragraph(),
            'slug' => fake()->unique()->slug,
            'visibility' => (bool) rand(0,1),
            'category_id' => rand(1,2),
            'user_id' => 1,
        ];
    }
}
