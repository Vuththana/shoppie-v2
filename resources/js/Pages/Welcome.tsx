import ButtonPrimary from '@/Components/ButtonPrimary'
import ButtonSecondary from '@/Components/ButtonSecondary'
import { Head } from '@inertiajs/react';
import AuthenticationLayout from '@/Layouts/AuthenticationLayout'
import { PageProps } from '@/types'
import { Link } from '@inertiajs/react'
import React from 'react'
import ProductCard from '@/Components/ProductCard';
import Footer from '@/Components/Footer';

export default function Welcome({auth}: PageProps) {


  return (
    <>
      <AuthenticationLayout
      user = {auth.user}
      header = {<h2 className='font-semibold text-xl text-gray-800 leading-tight'></h2>}
      >
      </AuthenticationLayout>

      <img src="/storage/product-image/01J43YAZFWGNBGP93EDCYA8YTN.png" alt="ewqe" />

      <Footer />
    </>
  )
}
