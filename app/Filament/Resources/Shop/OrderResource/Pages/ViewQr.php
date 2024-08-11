<?php

namespace App\Filament\Resources\Shop\OrderResource\Pages;

use App\Filament\Resources\Shop\OrderResource;
use App\Models\Shop\Order;
use Filament\Actions;
use Filament\Resources\Pages\ViewRecord;

class ViewQr extends ViewRecord
{
    protected static string $resource = OrderResource::class;

    protected static string $view = 'filament.resources.product-resource.pages.view-qr-code';
}
