<x-filament::page>
    <div class="mx-auto">
        {!! DNS1D::getBarcodeHTML($record->sku, 'C39') !!}
        <span class="text-xl">{{$record->sku}}</span>
    </div>
    
</x-filament::page>

