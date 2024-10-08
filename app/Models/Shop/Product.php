<?php

namespace App\Models\Shop;
use App\Models\user;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

    protected $fillable = [
        'id',
        'image',
        'product_name',
        'product_description',
        'slug',
        'stock',
        'sku',
        'selling_price',
        'bought_in',
        'selling_price',
        'visibility',
        'sku',
        'category_id',
        'sub_category_id',
        'user_id',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function category()
    {
        return $this->belongsTo(Category::class);
    }

    public function sub_category()
    {
        return $this->belongsTo(SubCategory::class);
    }

    public function reviews()
    {
        return $this->hasMany(Review::class);
    }
    
}
