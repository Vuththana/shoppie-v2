import { InertiaLinkProps, Link } from '@inertiajs/react'
import React from 'react'

export default function Navlink({active = false, className = '', children, ...props}: InertiaLinkProps & {active: boolean}) {
  return (
    <Link 
        {...props}
        className={
            'inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium leading-5 transition duration 150 ease-in-out focus:outline-none ' +
            (active
                ? 'border-indigo-400 text-gray-900 focus:border-indigo-700 '
                : 'border-transparent text-gray-900 hover:text-gray-700 hover:border-gray-300 focus:text-gray-700 focus:border-gray-300 ' +
                className
            )
        }
    >
        {children}
    </Link>
  )
}
