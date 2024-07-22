<?php

namespace App\Filament\Resources\Users;

use App\Filament\Resources\Users\UserResource\Pages;
use App\Filament\Resources\Users\UserResource\Pages\CreateUser;
use App\Filament\Resources\Users\UserResource\RelationManagers;
use App\Models\User;
use Filament\Forms;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Form;
use Filament\Pages\Page;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;
use Illuminate\Support\Facades\Hash;
use Spatie\Permission\Models\Role;

class UserResource extends Resource
{
    protected static ?string $model = User::class;

    protected static ?string $navigationIcon = 'heroicon-o-rectangle-stack';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                TextInput::make('name'),
                TextInput::make('email'),
                TextInput::make('password')
                    ->password()
                    ->revealable()
                    ->dehydrateStateUsing(fn($state) => Hash::make($state)) //Format password to * when using
                    ->dehydrated(fn($state) => filled($state))
                    ->required(fn(Page $livewire) => ($livewire instanceof CreateUser)),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('name'),
                TextColumn::make('email'),
                TextColumn::make('roles.name')
                ->badge()
                ->color(function(string $state){
                    $userhasRoles = Role::pluck('name')->toArray();
                    foreach($userhasRoles as $userhasRole) {
                        if($state === $userhasRole) {
                            return 'success';
                        }
                        return 'default';
                    }
                }),
                TextColumn::make('created_at')
                    ->dateTime('d-M-y  H:i:s'),
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
            'index' => Pages\ListUsers::route('/'),
            'create' => Pages\CreateUser::route('/create'),
            'edit' => Pages\EditUser::route('/{record}/edit'),
        ];
    }
}
