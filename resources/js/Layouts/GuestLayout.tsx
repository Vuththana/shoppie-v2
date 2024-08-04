import ApplicationLogo from '@/Components/ApplicationLogo'
import Dropdown, { DropDownContext } from '@/Components/Dropdown'
import TextInput from '@/Components/TextInput'
import { User } from '@/types'
import { Link } from '@inertiajs/react'
import React, { PropsWithChildren, ReactNode, useContext, useState } from 'react'


const ChevronDownIcon = () => (
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
    
    <div className='shadow-md w-full fixed top-0 left-0 z-50'>
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

        <div className='bg-gray-100 border border-transparent 
         flex px-6 rounded-full h-10 lg:w-2/4 mt-3 mx-auto max-lg:mt-6'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192.904 192.904" width="16px"
            className="fill-gray-600 mr-3 rotate-90">
          <path
            d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z">
          </path>
      </svg>
      <input type="text" placeholder='Search...' className='w-full border-transparent focus:outline-none focus:ring-0 focus:border-transparent bg-transparent text-gray-600 font-semibold text-[15px]' />
      <ul className='md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-transparent md:z-auto
        z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in'>
         <Dropdown>
          <Dropdown.Trigger>
          {({ open }) => (
                  <button className='inline-flex px-3 border-l-2 py-2 text-sm leading-4 font-medium text-gray-500 hover:text-gray-700 focus:outline-none transition ease-in-out duration-150'>
                    <span>Categories</span>
                    {open ? <ChevronUpIcon /> : <ChevronDownIcon />}
                  </button>
                )}
          </Dropdown.Trigger>
          <Dropdown.Content>
            <Dropdown.Link href='/gaming-accounts'>All Categories</Dropdown.Link>
          </Dropdown.Content>
         </Dropdown>
      </ul>
        </div>
      </div>
    </div>
  )
}
