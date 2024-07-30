import React, { InputHTMLAttributes } from 'react'

export default function TextInput({text, className = '', ...props}: InputHTMLAttributes<HTMLInputElement> & {text?: string}) {
  return (

    <input
        {...props} 
        type="text"
        className = {`block w-[200px] p-3 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 `+ className}
        placeholder= {text}
    />
  )
}
