<?php
namespace App\Models\Shop;

use App\Enums\PaymentMethod;
use App\Enums\OrderStatus;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\User;

class Order extends Model
{
    use HasFactory;

    protected $casts = [
        'status' => OrderStatus::class,
        'payment_method' => PaymentMethod::class,
    ];

    protected $fillable = [
        'order_number',
        'user_id',
        'payment_status',
        'payment_method',
        'total_amount',
        'order_date',
    ];

    public function user()  
    {
        return $this->belongsTo(User::class);
    }

    public function product()
    {
        return $this->belongsTo(Product::class);
    }

    public function users()
    {
        return $this->hasMany(User::class);
    }

    public function products()
    {
        return $this->belongsToMany(Product::class, 'order_products');
    }

    public function orderProducts()
    {
        return $this->hasMany(OrderProduct::class);
    }

    public function getTotalAmountAttribute()
    {
        return $this->orderProducts->sum(function ($orderProduct) {
            return $orderProduct->product->selling_price * $orderProduct->quantity;
        });
    }
}
