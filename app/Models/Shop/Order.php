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
        'product_id' => 'array',
        
    ];

    protected $fillable = [
        'order_number',
        'user_id',
        'payment_status',
        'payment_method',
        'quantity',
        'total_amount',
        'order_date',
        'product_id',
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
        return $this->belongsToMany(Product::class);
    }
}
