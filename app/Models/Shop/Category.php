<?php

namespace App\Models\Shop;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    use HasFactory;

    protected $fillable = [
        'category_name',
        'category_description',
        'slug',
        'user_id',
    ];

    public function user() {
        return $this->belongsTo(User::class);
    }

    public function users() {
        return $this->hasMany(User::class);
    }
}
