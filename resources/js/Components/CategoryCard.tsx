import { Link } from '@inertiajs/react'
import { useEffect, useState } from 'react';

interface CategoryCardProps {
  category_name: string
  [key: string]: any
}


const CategoryCard: React.FC<CategoryCardProps> = ({
  category_name,
  ...props
}) => {
  return (
    <Link href="/product">
      <div className='relative flex-shrink-0 mr-[12px] text-center px-[24px] py-2 bg-white border-transparent hover:bg-blue-300 rounded-lg transition-transform transform cursor-pointer'>
          <h5 className='font-semibold'>{category_name}</h5>
      </div>
    </Link>
  )
}

export default CategoryCard;