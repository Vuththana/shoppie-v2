<?php

namespace App\Filament\Resources\Shop\ProductResource\Pages;

use App\Filament\Resources\Shop\ProductResource;
use App\Models\Shop\Product;
use Filament\Actions;
use Illuminate\Database\Eloquent\Builder;
use Filament\Resources\Components\Tab;
use Filament\Resources\Pages\ListRecords;

class ListProducts extends ListRecords
{
    protected static string $resource = ProductResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\CreateAction::make(),
        ];
    }

    public function __construct(){
        $this->orderByVisibility = Product::select('visibility', \DB::raw('count(*) as visibility_count'))
            ->groupBy('visibility')
            ->pluck('visibility_count', 'visibility');
    }

    public function getTabs(): array
    {
        return [
            null => Tab::make('All')->query(fn ($query) => $query),
            1 => Tab::make('Active')                
            ->badge($this->orderByVisibility[1] ?? '0')
            ->modifyQueryUsing(function ($query) {
                return $query->where('visibility', 1);
            }),
            0 => Tab::make('Inactive')
                ->badge($this->orderByVisibility[0] ?? '0')
                ->modifyQueryUsing(function ($query) {
                    return $query->where('visibility', 0);
                }),
        ];
    }
}
