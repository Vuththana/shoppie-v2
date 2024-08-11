import React from 'react'
import ItemsContainer from './ItemsContainer'

export default function Footer() {
  return (
    <footer className='bg-gray-900 text-white'>
        <div className='md:flex md:justify-between md:items-center sm:px-12 px-4 bg-[#ffffff19] py-7'>
            <h1 className='lg:text-4xl text-3xl md:mb-0 mb-6 lg:leading-normal font-semibold'>
                <span className='text-teal-400'>
                    Shoppie
                </span>
            </h1>
            <div>
                <input type="text" />
            </div>
        </div>
        <ItemsContainer />
    </footer>
  )
}
