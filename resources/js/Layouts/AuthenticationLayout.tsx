import ApplicationLogo from '@/Components/ApplicationLogo'
import Dropdown from '@/Components/Dropdown'
import TextInput from '@/Components/TextInput'
import { User } from '@/types'
import { Link } from '@inertiajs/react'
import React, { PropsWithChildren, ReactNode } from 'react'

export default function AuthenticationLayout({user, header, children}: PropsWithChildren<{user: User, header?: ReactNode}>) {
  return (
    <div className='min-h-screen bg-gray-100'>
        <nav className='bg-white border-b border-gray-100'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='flex justify-between h-16'>
                    <div className='flex'>
                        <div className='shrink-0 flex items-center'>
                            <Link href="/">
                                <ApplicationLogo className="block h-9 w-auto fill-current text-gray-800 items-center"/>
                            </Link>
                            <p className='text-xl font-bold mx-2 items-center'>Shoppie</p>
                        </div>
                        <div className='form-control my-auto ml-[700px]'>
                            <TextInput
                            text='What are you looking for?'
                            >
                            </TextInput>
                        </div>

                        <div className='hidden sm:flex sm:items-center sm:ms-6'>
                            <div className='ms-3 absolute right-[400px]'>
                                <Dropdown>
                                    <Dropdown.Trigger>
                                        <span className='inline-flex rounded-md'>
                                            <button
                                                type='button'
                                                className='inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150'
                                            >
                                                { user.name }
                                            </button>
                                        </span>
                                    </Dropdown.Trigger>
                                    <Dropdown.Content>
                                        <Dropdown.Link href='#'>Profile</Dropdown.Link>
                                        <Dropdown.Link href='#'>Log Out</Dropdown.Link>
                                    </Dropdown.Content>
                                </Dropdown>
                            </div>
                        </div>
                    </div>
                </div>  
            </div>
            <div className=''>

            </div>
        </nav>
    </div>
  )
}
