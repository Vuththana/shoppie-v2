<?php

namespace App\Filament\Resources\Shop\ProductResource\Pages;

use App\Filament\Resources\Shop\ProductResource;
use Filament\Actions;
use Filament\Resources\Pages\ViewRecord;

class ViewProduct extends ViewRecord
{
    protected static string $resource = ProductResource::class;
    protected static string $view = 'filament.resources.student-resource.pages.view-qr-code';
    protected function getHeaderActions(): array
    {
        return [];
    }
}
