<?php

namespace App\Filament\Widgets\Shop;

use App\Models\User;
use Filament\Widgets\ChartWidget;
use Flowframe\Trend\Trend;
use Flowframe\Trend\TrendValue;

class CustomerStatsOverview extends ChartWidget
{
    protected static ?string $heading = 'New User Joined';

    protected function getData(): array
    {
        $trend = Trend::query(User::role('Customer'))
        ->between(
            start: now()->startOfYear(),
            end: now()->endOfYear(),
        )
        ->perMonth()
        ->count();
        return [
            'datasets' => [
                [
                    'label' => 'New User Joined',
                    'data' => $trend->map(fn (TrendValue $value) => $value->aggregate),
                ],
            ],
            'labels' => ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        ];
    }

    protected function getType(): string
    {
        return 'line';
    }
}
