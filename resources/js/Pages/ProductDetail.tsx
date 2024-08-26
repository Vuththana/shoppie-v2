import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { PageProps } from '@/types';

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

interface Review {
  id: number;
  comment: string;
  rating: number;
  user_id: number;
  product_id: number;
  created_at: string;
  updated_at: string;
  user?: User;
}

interface User {
  id: number;
  name: string;
  email: string;
}

interface ProductDetailProps extends PageProps {
  product: Product;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ product }) => {
  const sellingPrice = Number(product.selling_price);
  const discountPrice = product.discount_price ? Number(product.discount_price) : null;
  const imageUrl = product.image || 'https://via.placeholder.com/500x500';
  const hasDiscount = discountPrice && discountPrice < sellingPrice;

  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [averageRating, setAverageRating] = useState<number>(0);
  const [ratingBreakdown, setRatingBreakdown] = useState<number[]>([0, 0, 0, 0, 0]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get(`/api/reviews/${product.id}`);
        const reviewsWithUserData = await Promise.all(
          response.data.map(async (review: Review) => {
            try {
              const userResponse = await axios.get(`/api/users/${review.user_id}`);
              review.user = userResponse.data;
            } catch (userError) {
              review.user = { id: review.user_id, name: 'Unknown', email: '' };
            }
            return review;
          })
        );

        setReviews(reviewsWithUserData);
        const totalRating = reviewsWithUserData.reduce((sum, review) => sum + review.rating, 0);
        setAverageRating(reviewsWithUserData.length > 0 ? totalRating / reviewsWithUserData.length : 0);

        const breakdown = [0, 0, 0, 0, 0];
        reviewsWithUserData.forEach(review => {
          breakdown[review.rating - 1]++;
        });
        setRatingBreakdown(breakdown);
      } catch (error) {
        console.error('Error fetching reviews:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, [product.id]);

  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    return (
      <>
        {'★'.repeat(fullStars)}
        {halfStar && '☆'}
        {'☆'.repeat(emptyStars)}
      </>
    );
  };

  return (
    <div className="font-sans bg-gray-50">
      <div className="p-4 lg:max-w-7xl max-w-4xl mx-auto">
        <div className="grid items-start grid-cols-1 lg:grid-cols-5 gap-12 shadow-lg p-8 rounded-lg bg-white">
          <div className="lg:col-span-3 w-full lg:sticky top-0">
            <div className="relative">
              <img src={imageUrl} alt={product.product_name} className="w-full h-auto rounded-lg object-cover" />
              <button type="button" className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-md">
                <svg xmlns="http://www.w3.org/2000/svg" width="24px" fill="#ccc" className="hover:fill-[#333]" viewBox="0 0 64 64">
                  <path d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z" />
                </svg>
              </button>
            </div>

            <div className="mt-6 flex flex-wrap justify-center gap-2">
              {/* Additional images or thumbnails */}
              <img src={imageUrl} alt="Thumbnail" className="w-24 h-24 rounded-lg object-cover cursor-pointer shadow-md" />
              <img src={imageUrl} alt="Thumbnail" className="w-24 h-24 rounded-lg object-cover cursor-pointer shadow-md" />
              <img src={imageUrl} alt="Thumbnail" className="w-24 h-24 rounded-lg object-cover cursor-pointer shadow-md" />
            </div>
          </div>

          <div className="lg:col-span-2">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{product.product_name}</h2>

            <div className="flex items-center space-x-4 mb-6">
              <span className="text-yellow-400 text-2xl">{renderStars(averageRating)}</span>
              <span className="text-gray-600 text-xl">({averageRating.toFixed(1)} / 5)</span>
            </div>

            <div className="flex items-center space-x-4 mb-8">
              <p className="text-gray-900 text-3xl font-semibold">
                ${discountPrice ? discountPrice.toFixed(2) : sellingPrice.toFixed(2)}
              </p>
              {hasDiscount && (
                <p className="text-gray-500 text-xl line-through">
                  ${sellingPrice.toFixed(2)}
                </p>
              )}
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Description</h3>
              <p className="text-gray-700 text-lg">{product.product_description}</p>
            </div>

            <div className="flex space-x-4 mb-8">
              <button type="button" className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white text-lg font-semibold rounded-lg shadow-md">Buy Now</button>
              <button type="button" className="w-full px-6 py-3 border border-blue-600 bg-transparent hover:bg-gray-100 text-blue-600 text-lg font-semibold rounded-lg shadow-md">Add to Cart</button>
            </div>

            {/* <div className="border-t border-gray-200 pt-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Rating Breakdown</h3>
              <div className="space-y-2">
                {ratingBreakdown.map((count, index) => (
                  <div key={index} className="flex items-center">
                    <span className="text-gray-600 font-medium">{5 - index} Stars</span>
                    <div className="ml-4 w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                      <div
                        className="bg-yellow-400 h-3 rounded-full"
                        style={{ width: `${(count / reviews.length) * 100}%` }}
                      ></div>
                    </div>
                    <span className="ml-4 text-gray-600">{count}</span>
                  </div>
                ))}
              </div>
            </div> */}
          </div>
        </div>

        <div className="mt-10 bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-semibold mb-6">Customer Reviews</h2>
          {loading ? (
            <p>Loading reviews...</p>
          ) : reviews.length > 0 ? (
            <div className="space-y-6">
              {reviews.map((review) => (
                <div key={review.id} className="border-b pb-6 mb-6">
                  <div className="flex items-center mb-2">
                    <span className="text-yellow-400 text-xl">
                      {'★'.repeat(Math.round(review.rating))}
                    </span>
                    <span className="ml-2 text-gray-700 font-medium">{review.user?.name || 'Anonymous'}</span>
                  </div>
                  <p className="text-gray-800">{review.comment}</p>
                  <p className="text-gray-500 text-sm mt-1">Posted on {new Date(review.created_at).toLocaleDateString()}</p>
                </div>
              ))}
            </div>
          ) : (
            <p>No reviews yet.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
