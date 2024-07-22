<?php

namespace App\Models\Shop;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\User;

class Order extends Model
{
    use HasFactory;

    protected $fillable = [
        'order_number',
        'product_id',
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
    public function prduct()
    {
        return $this->belongsTo(Product::class);
    }
    public function users()
    {
        return $this->hasMany(User::class);
    }
    public function products()
    {
        return $this->hasMany(Product::class);
    }
}
