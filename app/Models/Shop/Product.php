<?php

namespace App\Models\Shop;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

    protected $fillable = [
        'product_name',
        'product_category',
        'slug',
        'selling_price',
        'bought_in',
        'visibility',
        'category_id',
        'sub_category_id',
        'user_id',
    ];

    public function user(){
        return $this->belongsTo(User::class);
    }
    public function category(){
        return $this->belongsTo(Category::class);
    }

    public function sub_category(){
        return $this->belongsTo(SubCategory::class);
    }

    
    public function users(){
        return $this->hasMany(User::class);
    }

    public function categories(){
        return $this->hasMany(Category::class);
    }

    public function sub_categories(){
        return $this->hasMany(SubCategory::class);
    }

    public function reviews(){
        return $this->hasMany(Review::class);
    }
}
