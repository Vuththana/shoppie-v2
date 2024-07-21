<?php

namespace App\Filament\Resources\Shop;

use App\Filament\Resources\Shop\ReviewResource\Pages;
use App\Filament\Resources\Shop\ReviewResource\RelationManagers;
use App\Models\Shop\Review;
use Filament\Forms;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;
use IbrahimBougaoua\FilamentRatingStar\Actions\RatingStar;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;
use Mokhosh\FilamentRating\Columns\RatingColumn;
use Mokhosh\FilamentRating\Components\Rating;

class ReviewResource extends Resource
{
    protected static ?string $model = Review::class;

    protected static ?string $navigationIcon = 'heroicon-s-star';

    protected static ?string $navigationGroup = 'Shop';
    protected static ?int $navigationSort = 4;

    protected function mutateFormDataBeforeCreate(array $data): array
    {
        $data['user_id'] = auth()->id();

        return $data;
    }

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                    Textarea::make('comment')
                    ->required(),
                    RatingStar::make('rating')
                    ->required(),
                    TextInput::make('user_id')
                        ->hidden()
                        ->dehydratedWhenHidden()
                        ->default(auth()->id()),
                    Select::make('product_id')
                        ->relationship('products', 'product_name'),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('id')
                    ->label('ID'),
                TextColumn::make('id')->sortable()
                    ->label('ID'),
                TextColumn::make('user.name')
                    ->label('Created By'),
                TextColumn::make('product.product_name')->sortable()->searchable()
                    ->limit(20),
                TextColumn::make('comment')
                    ->limit(20),
                RatingColumn::make('rating'),
                TextColumn::make('created_at')
                    ->dateTime('d-M-y'),
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
            'index' => Pages\ListReviews::route('/'),
            'create' => Pages\CreateReview::route('/create'),
            'edit' => Pages\EditReview::route('/{record}/edit'),
        ];
    }
}
