<?php

namespace App\Filament\Resources\Shop;

use App\Filament\Resources\Shop\SubCategoryResource\Pages;
use App\Filament\Resources\Shop\SubCategoryResource\RelationManagers;
use App\Models\Shop\SubCategory;
use App\Models\User;
use Filament\Forms;
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

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                //
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('sub_category_name'),
                TextColumn::make('sub_category_description')
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
            //
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
