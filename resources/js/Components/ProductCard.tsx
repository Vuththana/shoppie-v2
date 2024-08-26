import { Link } from '@inertiajs/react';
import React from 'react';

interface ProductCardProps {
  image: string;
  product_name: string;
  product_description: string;
  stock?: number;
  selling_price: number;
  discount_price?: number;
  rating?: number; 
  badge?: string;
  id: number;
  [key: string]: any;
}

const ProductCard: React.FC<ProductCardProps> = ({
  image,
  product_name,
  product_description,
  stock = 1,
  selling_price,
  discount_price,
  rating,
  badge,
  id,
  ...props
}) => {
  const hasDiscount = discount_price && discount_price < parseFloat(selling_price.toString());
  const imageUrl = image || 'https://imgs.search.brave.com/DZCJgQTacw-MqgqZW45wr7QSvSG2UnuB9do13kt-KHU/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA3Lzg1LzUzLzI3/LzM2MF9GXzc4NTUz/MjcxMF94Sk02TWZl/YVZ5THd3OUREdnNp/eW9EbFZucW5SSzg1/Ty5qcGc';
  const truncateText = (text: string, length: number): string => {
    return text.length > length ? text.substring(0, length) + '...' : text;
};

  
  return (
    <div className='flex m-8 flex-col w-full max-w-xs h-90 bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl'>
      <Link href={`/product/${id}`} className='relative'>
        <img src={`/storage/${imageUrl}`}
          alt={product_name}  className='w-full h-48 object-cover' />
        {badge && (
          <span className='absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded'>
            {badge}
          </span>
        )}

      <div className='flex flex-col flex-1 p-4'>
          <h5 className='text-lg font-semibold text-slate-900 truncate'>{product_name}</h5>
        <p className='text-sm text-gray-500 mt-2 truncate'>{truncateText(product_description, 60)}</p>
        <div className='flex items-center justify-between mt-2'>
          <h5 className='text-sm font-medium text-gray-700'>
            {stock > 0 ? `In stock: ${stock}` : 'Out of stock'}
          </h5>
          {rating && (
            <div className='flex items-center'>
              <span className='text-yellow-400'>{'★'.repeat(Math.round(rating))}</span>
              <span className='text-gray-400'>{'★'.repeat(5 - Math.round(rating))}</span>
              <span className='text-gray-500 ml-2'>({rating.toFixed(1)})</span>
            </div>
          )}
        </div>
        <div className='flex items-center justify-between mt-2'>
          {hasDiscount ? (
            <>
              <span className='text-xl font-bold text-red-500'>${discount_price}</span>
              <span className='text-sm text-gray-500 line-through'>${selling_price}</span>
            </>
          ) : (
            <span className='text-xl font-bold text-slate-900'>${selling_price}</span>
          )}
        </div>
        <div className='mt-4 flex items-center justify-center rounded-md bg-slate-900 px-4 py-2 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300 transition-colors'>
          <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          View Details
          </div>
      </div>
      </Link>
    </div>
  )
}

export default ProductCard;
