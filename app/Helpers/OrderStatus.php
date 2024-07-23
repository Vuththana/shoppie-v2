<?php

namespace App\Helpers;

use Filament\Support\Contracts\HasLabel;
 
enum OrderStatus: string implements HasLabel
{
    case Pending = 'pending';
    case Processing = 'processing';
    case Completed = 'completed';
    case Cancelled = 'cancelled';
    
    public function getLabel(): ?string
    {
        return match ($this) {
            self::Pending => 'Pending',
            self::Processing => 'Processing',
            self::Completed => 'Completed',
            self::Cancelled => 'Cancelled',
        };
    }
}