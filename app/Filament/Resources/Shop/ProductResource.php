<?php

namespace App\Filament\Resources\Shop;

use App\Filament\Resources\Shop\ProductResource\Pages;
use App\Filament\Resources\Shop\ProductResource\RelationManagers;
use App\Filament\Resources\Shop\ProductResource\RelationManagers\ReviewsRelationManager;
use App\Models\Shop\Category;
use App\Models\Shop\Order;
use App\Models\Shop\Product;
use App\Models\Shop\SubCategory;
use App\Models\User;
use Filament\Actions\DeleteAction;
use Filament\Forms;
use Filament\Forms\Components\Card;
use Filament\Forms\Components\DatePicker;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Columns\TextColumn;
use Filament\Resources\Components\Tab;
use Filament\Tables\Columns\IconColumn;
use Filament\Tables\Columns\ImageColumn;
use Filament\Tables\Columns\Summarizers\Sum;
use Filament\Tables\Columns\ToggleColumn;
use Filament\Tables\Filters\SelectFilter;
use Filament\Tables\Filters\TrashedFilter;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;
use Malzariey\FilamentDaterangepickerFilter\Filters\DateRangeFilter;
use Filament\Tables\Actions\Action;

class ProductResource extends Resource
{
    protected static ?string $model = Product::class;

    protected static ?string $navigationIcon = 'heroicon-s-shopping-bag';
    protected static ?string $navigationGroup = 'Shop';
    protected static ?int $navigationSort = 3;

    public static function getGloballySearchableAttributes(): array
    {
        return [ 'user.name' ]; 
    }
    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Card::make([
                FileUpload::make('image')
                    ->directory('product-images')
                    ->image()
                    ->imageEditor()
                    ->circleCropper(),
                    TextInput::make('product_name')
                    ->label('Product Name')
                    ->required(),
                Textarea::make('product_description')
                    ->label('Description')
                    ->required()
                    ->rows(10)
                    ->cols(20),
                TextInput::make('bought_in')
                    ->helperText('Please enter "." for the decimal point')
                    ->label('Bought In')
                    ->type('number')
                    ->step('any')
                    ->required(),
                TextInput::make('selling_price')
                    ->helperText('Please enter "." for the decimal point')
                    ->label('Selling Price')
                    ->type('number')
                    ->step('any')
                    ->required(),
                Select::make('category_id')
                    ->label('Category')
                    ->options(Category::all()->pluck('category_name', 'id')->toArray())
                    ->reactive()
                    ->afterStateUpdated(fn (callable $set) => $set('sub_category_id', null))
                    ->required(),
                Select::make('sub_category_id')
                    ->label('Sub Category')
                    ->options(function(callable $get) {
                        $category = Category::find($get('category_id'));
                        if(!$category) {
                            return SubCategory::all()->pluck('sub_category_name', 'id');
                        };
                        return $category->sub_categories->pluck('sub_category_name', 'id');
                    })
                    ->reactive()
                    ->required(),
                Select::make('visibility')
                    ->options([
                        true => 'Active',
                        false => 'Inactive',
                    ])
                    ->default(true)
                    ->required(),
                ])
  
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('id')
                    ->label('ID'),
                ImageColumn::make('image')
                    ->size(60),
                TextColumn::make('product_name')
                    ->label('Product Name')
                    ->searchable(),
                TextColumn::make('product_description')
                    ->label('Description')
                    ->limit(10),
                TextColumn::make('stock'),
                TextColumn::make('selling_price')
                    ->label('Selling Price')
                    ->color(function(string $state) {
                        $sellingPriceItems = Product::pluck('selling_price')->toArray();
                        foreach($sellingPriceItems as $sellingPriceItem) {
                            if($state === $sellingPriceItem) {
                                return 'success';
                            }
                        }
                        return 'default';
                    })
                    ->money('USD'),
                TextColumn::make('bought_in')
                    ->label('Bought In')
                    ->color(function(string $state) {
                        $BoughtInItems = Product::pluck('bought_in')->toArray();
                        foreach($BoughtInItems as $BoughtInItem) {
                            if($state === $BoughtInItem) {
                                return 'success';
                            }
                        }
                        return 'default';
                    })
                    ->money('USD')
                    ->summarize(
                        Sum::make()
                            ->label('Stock Value')
                            ->money('USD'),
                        ),  
                TextColumn::make('category.category_name')
                    ->badge()
                    ->toggleable(isToggledHiddenByDefault: true),
                TextColumn::make('sub_category.sub_category_name')
                    ->label('Sub Category')
                    ->badge()
                    ->searchable()
                    ->toggleable(isToggledHiddenByDefault: true)
                    ->color(function(string $state) {
                        $subCategoryNames = SubCategory::pluck('sub_category_name')->toArray();
                        foreach($subCategoryNames as $subCategoryName) {
                            if($state === $subCategoryName) {
                                return 'info';
                            }
                        }
                        return 'default';
                    }),
                IconColumn::make('visibility')
                    ->boolean(),
                TextColumn::make('user.name')
                    ->label('Created by')
                    ->toggleable(isToggledHiddenByDefault: true)
                    ->badge()
                    ->color(function(string $state) {
                        $userNames = User::pluck('name')->toArray();
                        foreach($userNames as $userName) {
                            if($state === $userName) {
                                return 'success';
                            }
                        }
                        return 'default';
                    }),
                TextColumn::make('created_at')
                    ->label('Created At')
                    ->dateTime('d-M-y')
                    ->toggleable(isToggledHiddenByDefault:true),
            ])
            ->filters([
                DateRangeFilter::make('created_at')
                    ->label('Created At(Between Range)'),
            ])
            ->actions([
                Tables\Actions\ViewAction::make(),
                Tables\Actions\EditAction::make(),
                Tables\Actions\DeleteAction::make(),
                Action::make('View Qr Code')
                    ->icon('heroicon-o-qr-code')
                    ->url(fn(Product $record): string => static::getUrl('qr-code', ['record' => $record])),
                ])
            ->bulkActions([
                    Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
                ]),
            ]);
    }

    public static function getRelations(): array
    {
        return [
            ReviewsRelationManager::class,
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListProducts::route('/'),
            'create' => Pages\CreateProduct::route('/create'),
            'edit' => Pages\EditProduct::route('/{record}/edit'),
            'qr-code' => Pages\ViewQrCode::route('{record}/qr-code'),
        ];
    }
}
