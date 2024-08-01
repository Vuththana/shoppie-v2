import AuthenticationLayout from '@/Layouts/AuthenticationLayout'
import { PageProps } from '@/types'
import React from 'react'

export default function OrderPage({auth}: PageProps) {
  return (
    <>
    <AuthenticationLayout
      user = {auth.user}
      header = {<h2 className='font-semibold text-xl text-gray-800 leading-tight'></h2>}
    >
    </AuthenticationLayout>
    <div className=''>  
        <div className=''>
          <p></p>
        </div>
    </div>
    </>
  )
}
