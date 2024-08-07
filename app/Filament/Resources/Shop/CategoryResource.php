<?php

namespace App\Filament\Resources\Shop;

use App\Filament\Resources\Shop\CategoryResource\Pages;
use App\Filament\Resources\Shop\CategoryResource\RelationManagers;
use App\Models\Shop\Category;
use App\Models\User;
use Faker\Provider\ar_EG\Text;
use Filament\Forms;
use Filament\Forms\Components\Card;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Columns\IconColumn;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;
use Malzariey\FilamentDaterangepickerFilter\Filters\DateRangeFilter;

class CategoryResource extends Resource
{
    protected static ?string $model = Category::class;

    protected static ?string $navigationIcon = 'heroicon-o-rectangle-stack';
    protected static ?string $navigationGroup = 'Shop';
    protected static ?int $navigationSort = 1;

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Card::make([
                TextInput::make('category_name')
                    ->required(),
                Textarea::make('category_description')
                    ->required()
                    ->rows(10)
                    ->cols(20),
                TextInput::make('slug')
                    ->required(),
                TextInput::make('user_id')
                    ->hidden()
                    ->dehydrated()
                    ->default(auth()->user()->id)
                    ->disabled(),
                ])
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('id')
                    ->label('ID'),
                TextColumn::make('category_name')
                    ->label('Category Name')
                    ->sortable(),
                TextColumn::make('category_description')
                    ->label('Description')
                    ->limit(20),
                TextColumn::make('slug'),
                IconColumn::make('visibility')
                    ->boolean(),
                TextColumn::make('user.name')
                    ->label('Created By')
                    ->badge()
                    ->color(function($state) {
                        $userNames = User::pluck('name')->toArray();
                        foreach ($userNames as $userName) {
                            if ($state == $userName) {
                                return 'success';
                            }
                        }
                        return 'default';
                    }),
            ])
            ->filters([
                DateRangeFilter::make('created_at')
                    ->label('Created At(Between Range)'),
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
                Tables\Actions\DeleteAction::make(),
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
            'index' => Pages\ListCategories::route('/'),
            'create' => Pages\CreateCategory::route('/create'),
            'edit' => Pages\EditCategory::route('/{record}/edit'),
        ];
    }
}
