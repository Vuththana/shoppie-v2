<?php

namespace App\Enums;

use Filament\Support\Contracts\HasColor;
use Filament\Support\Contracts\HasIcon;
use Filament\Support\Contracts\HasLabel;

enum PaymentMethod: string implements HasLabel, HasColor, HasIcon
{
    case KhQR = 'KhQR';
    case CreditCard = 'credit card'; 
    case DebitCard = 'debit card';   

    public function getLabel(): ?string
    {
        return match ($this) {
            self::KhQR => 'KhQR',
            self::CreditCard => 'Credit Card',
            self::DebitCard => 'Debit Card',
        };
    }

    public function getIcon(): ?string
    {
        return match ($this) {
            self::KhQR => 'heroicon-o-qr-code',
            self::CreditCard => 'heroicon-o-credit-card', 
            self::DebitCard => 'heroicon-o-credit-card',  
        };
    }

    public function getColor(): string|array|null
    {
        return match ($this) {
            self::KhQR => 'primary',
            self::CreditCard => 'success',
            self::DebitCard => 'warning',
        };
    }
}
