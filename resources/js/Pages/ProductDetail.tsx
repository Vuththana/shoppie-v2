// resources/js/Pages/ProductDetail.tsx

import React from 'react';
import { PageProps } from '@/types'

interface Product {
  id: number;
  product_name: string;
  product_description: string;
  selling_price: string;
  discount_price?: string;
  slug: string;
  visibility: number;
  category_id: number;
  sub_category_id: number;
  user_id: number;
  created_at: string;
  updated_at: string;
  image?: string;
}

interface ProductDetailProps extends PageProps {
  product: Product;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ product }) => {
  const sellingPrice = Number(product.selling_price);
  const discountPrice = product.discount_price ? Number(product.discount_price) : null;
  
  const imageUrl = product.image || 'https://imgs.search.brave.com/DZCJgQTacw-MqgqZW45wr7QSvSG2UnuB9do13kt-KHU/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA3Lzg1LzUzLzI3/LzM2MF9GXzc4NTUz/MjcxMF94Sk02TWZl/YVZ5THd3OUREdnNp/eW9EbFZucW5SSzg1/Ty5qcGc';
  const hasDiscount = discountPrice && discountPrice < sellingPrice;

  return (
    <div className="product-detail container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row">
      <img 
          src={imageUrl} 
          alt={product.product_name} 
          className="w-full md:w-1/2 object-cover" 
        />
        <div className="product-info md:w-1/2 md:pl-8">
          <h1 className="text-3xl font-bold mb-4">{product.product_name}</h1>
          <p className="text-lg text-gray-700 mb-4">{product.product_description}</p>
          <div className="flex items-center">
            {hasDiscount ? (
              <>
                <span className="text-3xl font-bold text-red-500">
                  ${discountPrice?.toFixed(2)}
                </span>
                <span className="text-xl text-gray-500 line-through ml-4">
                  ${sellingPrice.toFixed(2)}
                </span>
              </>
            ) : (
              <span className="text-3xl font-bold text-slate-900">
                ${sellingPrice.toFixed(2)}
              </span>
            )}
          </div>
          {/* Other product details and actions */}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
