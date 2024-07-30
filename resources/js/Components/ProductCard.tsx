import { Link } from '@inertiajs/react'
import React from 'react'

interface ProductCardProps {
  image: string
  product_name: string
  product_description: string
  stock: number
  selling_price: number
  [key: string]: any
}

const ProductCard: React.FC<ProductCardProps> = ({
  image,
  product_name,
  product_description,
  stock,
  selling_price,
  ...props
}) => {
  return (
      <div className='relative m-10 w-[300px] flex flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md hover:shadow-lg hover:scale-110 duration-300' {...props}>
          <Link href='#'
          className='relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl'>
            <img src={image} className='object-cover w-full'/>
          </Link>
          <div className='mt-4 px-5 pb-5'>
            <Link href='#'>
              <h5 className='text-xl tracking-light text-slate-900'>{product_name}</h5>
            </Link>
            <Link href='#'>
              <h5 className='text-sm tracking-light text-gray-500'>{product_description}</h5>
            </Link>
          <h5 className='text-sm tracking-tight text-gray-700'>
            {stock > 0 ? `In stock: ${stock}` : 'Out of stock'}
          </h5>
          <div className='text-3xl font-bold text-slate-900'>
              <p>
                <span>${selling_price}</span>
                </p>
          </div>
          <Link href='#'
            className='flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300'
          >
        <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
          </Link>
          </div>
      </div>
  )
}

export default ProductCard

