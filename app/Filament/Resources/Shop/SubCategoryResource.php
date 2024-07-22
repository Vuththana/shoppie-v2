<?php

namespace App\Filament\Resources\Shop;

use App\Filament\Resources\Shop\SubCategoryResource\Pages;
use App\Filament\Resources\Shop\SubCategoryResource\RelationManagers;
use App\Filament\Resources\Shop\SubCategoryResource\RelationManagers\ProductsRelationManager;
use App\Models\Shop\SubCategory;
use App\Models\User;
use Filament\Forms;
use Filament\Forms\Components\Card;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class SubCategoryResource extends Resource
{
    protected static ?string $model = SubCategory::class;

    protected static ?string $navigationIcon = 'heroicon-o-rectangle-stack';
    protected static ?string $navigationGroup = 'Shop';
    protected static ?int $navigationSort = 2;
    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Card::make([
                    TextInput::make('sub_category_name')
                        ->label('Sub Category Name'),
                    Textarea::make('sub_category_description')
                        ->label('Description')
                        ->rows(10)
                        ->cols(20),
                    TextInput::make('slug'),
                    Select::make('category_id')
                        ->relationship('category', 'category_name'),
                ])
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('id')
                    ->label('ID'),
                TextColumn::make('sub_category_name')
                    ->label('Sub Category Name'),
                TextColumn::make('sub_category_description')
                    ->label('Description')
                    ->limit(20),
                TextColumn::make('slug'),
                TextColumn::make('user.name')
                    ->badge()
                    ->color(function(string $state) {
                        $userNames =  User::pluck('name')->toArray();

                        foreach($userNames as $userName) {
                            if($state === $userName) {
                                return 'success';
                            }
                            return 'default';
                        }
                    }),
                TextColumn::make('category.category_name')
                    ->badge()
            ])
            ->filters([
                //
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
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
            ProductsRelationManager::class,
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListSubCategories::route('/'),
            'create' => Pages\CreateSubCategory::route('/create'),
            'edit' => Pages\EditSubCategory::route('/{record}/edit'),
        ];
    }
}
