import React, { ButtonHTMLAttributes } from 'react'

export default function ButtonSecondary({className = '', children, ...props }: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
        {...props}
        className={`inline-flex border border-bg-gray-900 px-4 py-2 rounded-md bg-transparent hover:bg-gray-300 ` + className}
    >
        {children}
    </button>
  )
}
