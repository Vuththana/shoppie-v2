<?php
namespace Database\Factories\Shop;

use App\Models\Shop\Order;
use App\Models\Shop\Product;
use App\Models\User;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Shop\Order>
 */
class OrderFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Order::class;

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'user_id' =>User::inRandomOrder()->first()->id,
            'product_id'=> Product::inRandomOrder()->first()->id,
            'order_number' => fake()->unique()->numerify('ORD#####'),
            'order_date' => fake()->dateTime(),
            'quantity' => fake()->randomNumber(1, 10),
            'total_amount' => fake()->randomFloat(2, 10, 1000),
            'status' => fake()->randomElement(['pending', 'processing', 'completed', 'cancelled']),
            'payment_method' => fake()->randomElement(['khqr', 'credit card', 'debit card']),
        ];
    }
}
