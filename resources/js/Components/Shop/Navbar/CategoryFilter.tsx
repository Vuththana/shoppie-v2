import CategoryCard from '@/Components/CategoryCard'
import Dropdown from '@/Components/Dropdown'
import { Link } from '@inertiajs/react'
import React, { useEffect, useState } from 'react'

interface Category {
    id: number;
    category_name: string;
  }

export default function CategoryFilter() {
    const [categories, setCategories] = useState<Category[]>([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const categoriesResponse = await fetch('http://127.0.0.1:8000/api/categories');
                const categoriesData: Category[] = await categoriesResponse.json();
                setCategories(categoriesData);
            } catch (err) {
                setError('Failed to fetch data');
                console.error(err)
            }
        }

        fetchData();
    }, []);

    if (error) {
        return <div className='text-black'>Error: {error}</div>;
    }
  return (
    <div className='max-w-[100%] gap-9 justify-center h-100 absolute bottom-3 px-[24px]'>
    <div className='py-0 mr-0 pr-0 static ml-auto list-none p-0'>
      <div className='relative w-100 h-100 z-[1] flex transition-transform flex-initial'>
        <div className='mx-4'>
        <Dropdown>
        <Dropdown.Trigger>
          {({ open }) => (
            <button className="bg-grey-500 text-black p-2 rounded-md border">
              {open 
              ? 
              <p className='flex mr-2 font-semibold'>
                Popular
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
                </svg>
              </p> 
              : 
              <p className='flex mr-2 font-semibold'>
                Popular
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>
                </p>}
            </button>
          )}
        </Dropdown.Trigger>
        <Dropdown.Content align="left" width="48" contentClasses="py-2 bg-gray-100">
            <Dropdown.Link href='/product'>
              <span></span>
            </Dropdown.Link>
        </Dropdown.Content>
        </Dropdown>
        </div>
        <div className='flex'>
        <Link href='/product'>
            <h5 className='font-semibold flex-shrink-0 mr-[12px] text-center px-[12px] py-2 bg-white border-transparent hover:bg-blue-300 rounded-lg transition-transform transform cursor-pointer'>All</h5>                      
          </Link>
        {categories.map(category => (
          <CategoryCard
            category_name={category.category_name}
            key={category.id}
          >
          </CategoryCard>
      ))}           
        </div>

        </div>
      </div>
    </div>
  )
}
