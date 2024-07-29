<x-filament::page>
    <div class="mx-auto">
        {!! DNS1D::getBarcodeHTML($record->sku, 'C39') !!}
        <p><span class="text-sm">Product Code:</span> {{$record->sku}} </p>
    </div>

</x-filament::page>