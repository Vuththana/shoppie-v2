import React from 'react'
import ItemsContainer from './ItemsContainer'
import SocialIcons from './SocialIcon'


export default function Footer() {
  
  return (
    <footer className='text-dark mt-auto border-t'>
        <ItemsContainer />
        <div
          className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-center pt-2 text-gray-400 text-sm pb-8 sm:flex justify-center'
        >
            <span>© 2024 Shoppie. All Right Reserve</span>
            <span>Terms · Privacy Policy</span>
        <SocialIcons />
        </div>
    </footer>
  )
}