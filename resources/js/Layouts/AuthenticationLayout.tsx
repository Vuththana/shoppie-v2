import ApplicationLogo from '@/Components/ApplicationLogo'
import Dropdown, { DropDownContext } from '@/Components/Dropdown'
import Footer from '@/Components/Footer'
import TextInput from '@/Components/TextInput'
import { User } from '@/types'
import { Link } from '@inertiajs/react'
import React, { PropsWithChildren, ReactNode, useContext, useState } from 'react'


const ChevronDownIcon = ({children}: PropsWithChildren) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-4">
    <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
  </svg>
);

const ChevronUpIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-4">
    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
  </svg>
);



export default function AuthenticationLayout({user, header, children}: PropsWithChildren<{user: User, header?: ReactNode}>) {
  return (
    <>
    <header className='shadow-md w-full fixed top-0 left-0 z-50'>
      <div className='md:flex bg-white py-4 md:px-10 px-7'>
        <div className='font-bold text-2xl cursor-pointer flex items-center text-gray-800'>
        <span className='mr-1 pt-2 items-center'>
          <ApplicationLogo className='w-10'></ApplicationLogo>
        </span>
        <p className='mt-3'>Shoppie</p>
        </div>
        <div className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </div>
      </div>
    </header>
    </>
  )
}
