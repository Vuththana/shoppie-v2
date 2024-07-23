<?php

namespace App\Enums;

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
<<<<<<< HEAD:app/Helpers/OrderStatus.php
}
=======

    public function getIcon(): ?string
    {
        return match ($this) {
            self::Pending => 'heroicon-o-clock',
            self::Processing => 'heroicon-o-arrow-path',
            self::Completed => 'heroicon-o-check-circle',
            self::Cancelled => 'heroicon-o-x-circle',
        };
    }

    public function getColor(): string|array|null
    {
        return match ($this) {
            self::Pending => 'primary',
            self::Processing => 'info',
            self::Completed => 'success',
            self::Cancelled => 'danger',
        };
    }
}
>>>>>>> e79a91a1e2ec1b3bfa9dbd6742e8c42393c27b6b:app/Enums/OrderStatus.php
