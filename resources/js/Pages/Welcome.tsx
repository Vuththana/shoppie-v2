import ButtonPrimary from '@/Components/ButtonPrimary'
import ButtonSecondary from '@/Components/ButtonSecondary'
import { Head } from '@inertiajs/react';
import AuthenticationLayout from '@/Layouts/AuthenticationLayout'
import { PageProps } from '@/types'
import { Link } from '@inertiajs/react'
import React, { useEffect, useState } from 'react'
import Footer from '@/Components/Footer';
import HotProduct from '@/Components/HotProduct'
import CardFooter from '@/Components/CardFooter';
import CategoryCard from '@/Components/CategoryCard';
import Dropdown from '@/Components/Dropdown';
interface Category {
  id: number;
  category_name: string;
}
interface Product {
  image: string;
  product_name: string;
  product_description: string;
  stock: number;
  selling_price: number;
  id: number;
}


export default function Welcome({auth}: PageProps) {
  const [categories, setCategories] = useState<Category[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const categoriesResponse = await fetch('http://127.0.0.1:8000/api/categories');
        const categoriesData: Category[] = await categoriesResponse.json();
        setCategories(categoriesData);

        const productsResponse = await fetch('http://127.0.0.1:8000/api/hot-products');
        const productsData: Product[] = await productsResponse.json();
        setProducts(productsData);
      } catch (err) {
        setError('Failed to fetch data');
        console.error(err);
      }
    };

    fetchData();
  }, []);

if (error) {
    return <div className='text-black'>Error: {error}</div>;
}

  return (
    <>
    <div className='min-h-screen flex flex-col'>
      <AuthenticationLayout
      user = {auth.user}
      header = {<h2 className='font-semibold text-xl text-gray-800 leading-tight'></h2>}
      >
      </AuthenticationLayout>
      <main>
      <section className="text-grey-100 relative justify-center flex border-b">
            <div className="max-w-[26ch] justify-center">
                <div className="flex justify-center mx-auto mt-[96px]">
                    <div className="mt-[100px] font-[680] text-center">
                        <h1 className="text-bold text-dark max-w-[16ch] sm:max-w-[60ch] text-6xl">Safety Trust Instant</h1>
                        <div className="max-w-[100%] font-light text-center text-dark mb-36">
                            <p>Shoppie ensures the safety and quality of all products, earning the trust of our customers through rigorous standards and exceptional service.</p>
                        </div>
                    </div>
                </div>
            </div>
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
                        {categories.map(category => (
                          <Dropdown.Link href='/'>
                            {category.category_name}
                          </Dropdown.Link>
                        ))}
                      </Dropdown.Content>
                      </Dropdown>
                      </div>
                      <div className='flex'>
                      <Link href='/'>
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
        </section>
        <section className='mt-7 p-10'>
        <div className='mx-10'>
                <p className='sm:text-xl font-semibold text-sm text-center'>Trending Products</p>
                <div className='flex flex-wrap justify-center items-center'>
                {products.map(product => (
                    <HotProduct
                        image={product.image}
                        product_name={product.product_name}
                        product_description={product.product_description}
                        stock={product.stock}
                        selling_price={product.selling_price}
                        id={product.id} 
                        key={product.id}>
                    </HotProduct>
            ))}
                </div>
            </div>
        </section>
        <section>
          <CardFooter />
        </section>
      </main>
      <Footer />
      </div>
    </>
  )
}