<?php

namespace App\Filament\Resources\Users\UserResource\Pages;

use App\Filament\Resources\Users\UserResource;
use App\Models\User;
use Filament\Actions;
use Filament\Resources\Components\Tab;
use Filament\Resources\Pages\ListRecords;

class ListUsers extends ListRecords
{
    protected static string $resource = UserResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\CreateAction::make(),
        ];
    }

    public function __construct(){
        $this->rolesCount = \DB::table('model_has_roles')
            ->join('roles', 'model_has_roles.role_id', '=', 'roles.id')
            ->select('roles.name as role', \DB::raw('count(*) as role_count'))
            ->groupBy('roles.name')
            ->pluck('role_count', 'role');
    }

    public function getTabs(): array
    {
        return [
            null => Tab::make('All')->query(fn ($query) => $query),
            'Admin' => Tab::make('Admin')
                ->badge($this->rolesCount['Admin'] ?? 0)
                ->query(fn ($query) => $query->role('Admin')),
            'Customer' => Tab::make('Customer')
                ->badge($this->rolesCount['Customer'] ?? 0)
                ->query(fn ($query) => $query->role('Customer'))
        ];
    }
}
