import ProductCard from '@/Components/ProductCard';
import AuthenticationLayout from '@/Layouts/AuthenticationLayout';
import { GET_ALL_PRODUCTS } from '@/Services/ProductService';
import { PageProps, User } from '@/types';
import React, { PropsWithChildren, ReactNode, useEffect, useState } from 'react'
import Footer from '@/Components/Footer';
interface Product {
    image: string;
    product_name: string;
    product_description: string;
    stock: number;
    selling_price: number;
    id: number;
  }


export default function HomePage({user, header, children}: PropsWithChildren<{user: User, header?: ReactNode}>) {

    const [data, setData] = useState<Product[]>([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetch('http://127.0.0.1:8000/api/products')
        .then((response) => response.json())
        .then(res => setData(res.data))
        .catch(err => setError(err))
    }, [])


    return (
        <>
        <div className='min-h-screen flex flex-col'>
        <AuthenticationLayout
        
        >
        </AuthenticationLayout>
        <main>
        <div className='container pt-24'>
                <div className='flex flex-wrap justify-center items-center'>
                {data.map(product => (
                    <ProductCard
                        image={product.image}
                        product_name={product.product_name}
                        product_description={product.product_description}
                        stock={product.stock}
                        selling_price={product.selling_price}
                        id={product.id} 
                        key={product.id}>
                    </ProductCard>
            ))}
                </div>
            </div>
        </main>
            <Footer />
            </div>
          </>
    )
}
