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

    protected function getTableSummary(): array
    {
        $completedOrders = Order::where('status', OrderStatus::Completed->value)->get();
        $totalCompletedOrders = $completedOrders->count();
        $totalCompletedAmount = $completedOrders->sum('total_amount');

        return [
            TextColumn::make('total_completed_orders')
                ->label('Total Completed Orders')
                ->value(fn () => $totalCompletedOrders)
                ->extraAttributes(['class' => 'font-semibold text-lg']),

            TextColumn::make('total_completed_amount')
                ->label('Total Completed Amount')
                ->value(fn () => '$' . number_format($totalCompletedAmount, 2))
                ->extraAttributes(['class' => 'font-semibold text-lg']),
        ];
    }

    public function getTabs(): array
    {
        return [
            null => Tab::make('All')->query(fn ($query) => $query),
            'pending' => Tab::make('Pending')->query(fn ($query) => $query->where('status', OrderStatus::Pending->value)),
            'processing' => Tab::make('Processing')->query(fn ($query) => $query->where('status', OrderStatus::Processing->value)),
            'completed' => Tab::make('Completed')->query(fn ($query) => $query->where('status', OrderStatus::Completed->value)),
            'cancelled' => Tab::make('Cancelled')->query(fn ($query) => $query->where('status', OrderStatus::Cancelled->value)),
        ];
    }
}
