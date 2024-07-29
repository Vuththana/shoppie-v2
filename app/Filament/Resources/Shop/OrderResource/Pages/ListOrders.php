<?php

namespace App\Filament\Resources\Shop\OrderResource\Pages;

use App\Filament\Resources\Shop\OrderResource;
use Filament\Actions;
use Filament\Resources\Pages\ListRecords;
use Filament\Tables\Columns\TextColumn;
use Filament\Resources\Components\Tab;
use App\Models\Shop\Order;
use App\Enums\OrderStatus;
use Filament\Tables;

class ListOrders extends ListRecords
{
    protected static string $resource = OrderResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\CreateAction::make(),
        ];
    }
    public function __construct(){
        $this->orderByStatuses = Order::select('status', \DB::raw('count(*) as order_count'))
            ->groupBy('status')
            ->pluck('order_count', 'status');
    }

    
    public function getTabs(): array
    {
        return [
            null => Tab::make('All')->query(fn ($query) => $query),
            'pending' => Tab::make('Pending')
                ->badge($this->orderByStatuses[OrderStatus::Pending->value] ?? '0')
                ->modifyQueryUsing(function ($query) {
                    return $query->where('status', OrderStatus::Pending->value);
                }),
            'processing' => Tab::make('Processing')                
            ->badge($this->orderByStatuses[OrderStatus::Processing->value] ?? '0')
            ->modifyQueryUsing(function ($query) {
                return $query->where('status', OrderStatus::Processing->value);
            }),
            'completed' => Tab::make('Completed')            
            ->badge($this->orderByStatuses[OrderStatus::Completed->value] ?? '0')
            ->modifyQueryUsing(function ($query) {
                return $query->where('status', OrderStatus::Completed->value);
            }),
            'cancelled' => Tab::make('Cancelled')            
            ->badge($this->orderByStatuses[OrderStatus::Cancelled->value] ?? '0')
            ->modifyQueryUsing(function ($query) {
                return $query->where('status', OrderStatus::Cancelled->value);
            }),
        ];
    }
}
