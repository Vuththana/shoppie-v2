<?php

namespace App\Filament\Resources\Shop;

use App\Filament\Resources\Shop\OrderResource\Pages;
use App\Models\Shop\Order;
use Filament\Forms;
use Filament\Forms\Components\Repeater;
use Filament\Resources\Form;
use Filament\Resources\Resource;
use Filament\Resources\Table;
use App\Enums\OrderStatus;
use Filament\Actions\Action;
use Filament\Tables;
use Filament\Forms\Components\DatePicker;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\ToggleButtons;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Columns\Summarizers\Count;
use Filament\Tables\Columns\Summarizers\Sum;
use Illuminate\Database\Query\Builder;
use Filament\Tables\Actions\EditAction;
use Filament\Tables\Actions\DeleteAction;

class OrderResource extends Resource
{
    protected static ?string $model = Order::class;

    protected static ?string $navigationIcon = 'heroicon-s-shopping-cart';
    protected static ?string $navigationGroup = 'Shop';
    protected static ?int $navigationSort = 5;

    public static function form(Forms\Form $form): Forms\Form
    {
        return $form
            ->schema([
                TextInput::make('order_number')
                    ->disabled()
                    ->dehydrated()
                    ->label('Order Number'),
                Select::make('user_id')
                    ->label('User')
                    ->relationship('user', 'name')
                    ->searchable()
                    ->disabled()
                    ->dehydrated(),
                Repeater::make('orderProducts')
                    ->relationship('orderProducts')
                    ->schema([
                        Select::make('product_id')
                            ->relationship('product', 'product_name')
                            ->required()
                            ->label('Product Name'),
                        TextInput::make('quantity')
                            ->required()
                            ->label('Quantity'),
                    ])
                    ->columns(2)
                    ->label('Products')
                    ->collapsed(),
                Select::make('products')
                    ->label('Products')
                    ->relationship('product', 'product_name')
                    ->multiple()
                    ->preload(),
                ToggleButtons::make('status')
                    ->inline()
                    ->options(OrderStatus::class)
                    ->default(OrderStatus::Pending)
                    ->label('Payment Status'),
                TextInput::make('payment_method')
                    ->required()
                    ->label('Payment Method'),
                TextInput::make('total_amount')
                    ->required()
                    ->label('Total Price')
                    ->dehydrated(false),
                DatePicker::make('order_date')
                    ->required()
                    ->label('Order Date'),
            ]);
    }

    public static function table(Tables\Table $table): Tables\Table
    {   
        return $table
            ->columns([
                TextColumn::make('order_number')
                    ->label('Order Number')
                    ->sortable()
                    ->searchable(),
                TextColumn::make('user.name')
                    ->label('User Name')
                    ->sortable()
                    ->searchable(),
                TextColumn::make('product.product_name')
                    ->label('Product Name')
                    ->sortable()
                    ->searchable()
                    ->toggleable(),
                TextColumn::make('status')
                    ->label('Payment Status')
                    ->badge()
                    ->sortable()
                    ->searchable()
                    ->summarize([
                        Sum::make()
                            ->query(function (Builder $query) { 
                                return $query->where('status', OrderStatus::Completed);
                            })->label('Total Order'),
                    ]),
                TextColumn::make('payment_method')
                    ->label('Payment Method')
                    ->badge()
                    ->sortable()
                    ->searchable(),
                TextColumn::make('order_date')
                    ->label('Order Date')
                    ->sortable()
                    ->searchable(),
                TextColumn::make('quantity'),
                TextColumn::make('total_amount')
                    ->label('Total Price')
                    ->getStateUsing(function (Order $record) {
                        return $record->total_amount;
                    })
                    ->money('USD')
                    ->sortable()
                    ->searchable()
                    ->summarize(
                        Count::make()
                            ->query(fn (Builder $query) => $query->where('status', OrderStatus::Completed))
                            ->label('Total Completed Payments')
                    ),
            ])
            ->filters([
                // Add any necessary filters here
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
                Tables\Actions\DeleteAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\DeleteBulkAction::make(),
            ]);
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListOrders::route('/'),
            'create' => Pages\CreateOrder::route('/create'),
            'edit' => Pages\EditOrder::route('/{record}/edit'),
            'qr-code' => Pages\ViewQr::route('{record}/qr-code'),
        ];
    }
}
