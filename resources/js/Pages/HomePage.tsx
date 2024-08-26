import ProductCard from '@/Components/ProductCard';
import AuthenticationLayout from '@/Layouts/AuthenticationLayout';

import { PageProps } from '@/types';
import React, { PropsWithChildren, ReactNode, useEffect, useState } from 'react'
import Footer from '@/Components/Footer';

interface User {
    id: number;
    name: string;
  }
interface HomePageProps {
     user: User;
    header?: ReactNode;
}

interface Product {
    id: number;
    product_name: string;
    product_description: string;
    selling_price: number;
    slug: string;
    visibility: number;
    category_id: number;
    sub_category_id: number;
    user_id: number;
    created_at: string;
    updated_at: string;
    image?: string;
    averageRating?: number;

}

interface Review {
    id: number;
    comment: string;
    rating: number;
    user_id: number;
    product_id: number;
    created_at: string;
    updated_at: string;
}

const HomePage: React.FC<HomePageProps> = ({ user, header }) => {
    const [products, setProducts] = useState<Product[]>([]);
    const [val , setval] = useState('gggg');
    const [error, setError] = useState<string | null>(null);
    const [arrVal , setArrVal] = useState({
        name:'',
        age:0,
        gender:''
    }); 
    useEffect(() => {
        async function fetchProducts() {
            try {
                const productResponse = await fetch('http://127.0.0.1:8000/api/products');
                const productsData = await productResponse.json();


                const reviewsResponse = await fetch('http://127.0.0.1:8000/api/reviews');
                const reviewsData: Review[] = await reviewsResponse.json();

                
                const productsWithRatings = productsData.map((product: Product) => {
                    const productReviews = reviewsData.filter(review => review.product_id === product.id);
                    const totalRating = productReviews.reduce((sum, review) => sum + review.rating, 0);
                    const averageRating = productReviews.length > 0 ? totalRating / productReviews.length : null;
                    return { ...product, averageRating } as Product & { averageRating: number | null };
                });


                setProducts(productsWithRatings);
            } catch (err) {
                if (err instanceof Error) {
                    console.error('Error fetching data:', err.message);
                    setError(err.message);
                } else {
                    console.error('Unknown error:', err);
                    setError('An unknown error occurred.');
                }
            }
        }
        fetchProducts();
    }, []);

   

    return (
        <>
            <AuthenticationLayout
          
            >
                
            </AuthenticationLayout>
            <div className="mt-24 text-center">
                <h1 className="text-4xl font-bold mb-4">Welcome to Our Shop</h1>
                <p className="text-lg mb-8">Find the best products at unbeatable prices.</p>

            </div> 
          
            <div className='container mx-auto px-4 py-8'>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8'>
                    {products.map(product => (
                        <ProductCard
                            image={product.image || './images/image.png'}
                            product_name={product.product_name}
                            product_description={product.product_description}
                            selling_price={product.selling_price}
                            id={product.id}
                            rating={product.averageRating}
                            key={product.id}>
                        </ProductCard>
                    ))}
                </div>
            </div>

        </>
    )
};
 export default HomePage;
