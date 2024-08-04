<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ProductResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'image' => $this->image,
            'product_name' => $this->product_name,
            'product_description' => $this->product_description,
            'stock' => $this->stock,
            'selling_price' => $this->selling_price,
        ];
    }
}
