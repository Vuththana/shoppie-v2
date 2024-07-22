<?php

namespace App\Filament\Resources\Shop;

use App\Enums\PaymentMethod as PaymentMethod;

use App\Filament\Resources\Shop\OrderResource\Pages;
use App\Enums\OrderStatus;
use App\Models\Shop\Order;
use Filament\Forms;
use Filament\Resources\Form;
use Filament\Resources\Resource;
use Filament\Resources\Table;
use Filament\Tables;
use Filament\Forms\Components\DatePicker;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\ToggleButtons;
use Filament\Tables\Columns\ToggleColumn;
use Illuminate\Database\Eloquent\Builder;

class OrderResource extends Resource
{
    protected static ?string $model = Order::class;

    protected static ?string $navigationIcon = 'heroicon-o-shopping-cart';

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
                Select::make('products')
                    ->label('Products')
                    ->relationship('products', 'product_name')
                    ->multiple()
                    ->disabled(),
                ToggleButtons::make('status')
                    ->inline()
                    ->options(OrderStatus::class)
                    ->default(OrderStatus::Pending->value)
                    ->label('Payment Status'),
                    Select::make('payment_method')
                    ->label('Payment Method')
                    ->options(PaymentMethod::class)
                    ->required(),
                TextInput::make('total_amount')
                    ->required()
                    ->label('Total Price'),
                DatePicker::make('order_date')
                    ->required()
                    ->label('Order Date'),
            ]);
    }

    public static function table(Tables\Table $table): Tables\Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('order_number')->label('Order Number')->sortable()->searchable(),
                Tables\Columns\TextColumn::make('user.name')->label('User Name')->sortable()->searchable(),
                Tables\Columns\TextColumn::make('product.product_name')->label('Product Name')->sortable()->searchable()->toggleable(),
                Tables\Columns\TextColumn::make('status')->label('Payment Status')->sortable()->searchable()->badge(),
                Tables\Columns\TextColumn::make('payment_method')->label('Payment Method')->sortable()->searchable(),
                Tables\Columns\TextColumn::make('order_date')->label('Order Date')->sortable()->searchable(),
                Tables\Columns\TextColumn::make('total_amount')->label('Total')->sortable()->searchable(),
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
        ];
    }
}
