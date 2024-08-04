import React, { ButtonHTMLAttributes } from 'react'

export default function ButtonPrimary({className = '', children, ...props}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      className={
        `inline-flex items-center px-4 py-2 bg-blue-600 border border-transparent rounded-md hover:bg-blue-400 ` + className}
      >
        {children}
    </button>
  )
}