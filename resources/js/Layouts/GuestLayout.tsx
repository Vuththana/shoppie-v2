import ApplicationLogo from '@/Components/ApplicationLogo'
import { Link } from '@inertiajs/react'
import { PropsWithChildren } from 'react'


export default function GuestLayout({ children }: PropsWithChildren) {
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

          <div className='w-full flex justify-end items-center'>
            <Link  href="/login">Login</Link>
            <p className='mx-1 pointer-events-none'>/</p>
            <Link href='/register'>Register</Link>
          </div>
      </div>
</header>
      {children}
      </>
  )
}