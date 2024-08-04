import React, { PropsWithChildren } from 'react'

export default function CategoryList({children}: PropsWithChildren) {
  return (
    <div className="bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-4 gap-6">
          <div className="text-center">
            <div className="bg-black rounded-full w-12 h-12 mx-auto flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.121 13.878A3 3 0 005 17h0a3 3 0 00.879-2.121l3.414-3.414M12 12l-3.414 3.414m3.828 0L17 12m-3.828 0L5 17m0 0L5.121 13.88zM18.364 5.636a9 9 0 1112.728 12.728 9 9 0 01-12.728-12.728z" />
              </svg>
            </div>
            <p className="mt-2">All</p>
          </div>
          <div className="text-center">
            <div className="bg-green-500 rounded-full w-12 h-12 mx-auto flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 1.343-3 3 0 1.025.51 1.927 1.288 2.486m1.59.514c.777.559 1.121 1.416 1.121 2.494 0 1.657 1.343 3 3 3h3m-6 0v3m0 0v3m-3-6h6" />
              </svg>
            </div>
            <p className="mt-2">Top Up</p>
          </div>
          <div className="text-center">
            <div className="bg-teal-500 rounded-full w-12 h-12 mx-auto flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 7h10M7 17h5" />
              </svg>
            </div>
            <p className="mt-2">Gift Cards</p>
          </div>
          <div className="text-center">
            <div className="bg-blue-500 rounded-full w-12 h-12 mx-auto flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-4-4" />
              </svg>
            </div>
            <p className="mt-2">Video Games</p>
          </div>
          <div className="text-center">
            <div className="bg-orange-500 rounded-full w-12 h-12 mx-auto flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m-6-8h6" />
              </svg>
            </div>
            <p className="mt-2">Software & App</p>
          </div>
          <div className="text-center">
            <div className="bg-pink-500 rounded-full w-12 h-12 mx-auto flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3" />
              </svg>
            </div>
            <p className="mt-2">Game coins</p>
          </div>
          <div className="text-center">
            <div className="bg-purple-500 rounded-full w-12 h-12 mx-auto flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14m-7-7v14" />
              </svg>
            </div>
            <p className="mt-2">Items</p>
          </div>
          <div className="text-center">
            <div className="bg-blue-600 rounded-full w-12 h-12 mx-auto flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 8V7a5 5 0 1110 0v1M4 9v6h16V9M5 15v2a2 2 0 002 2h10a2 2 0 002-2v-2" />
              </svg>
            </div>
            <p className="mt-2">Accounts</p>
          </div>
          <div className="text-center">
            <div className="bg-yellow-500 rounded-full w-12 h-12 mx-auto flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <p className="mt-2">Boosting</p>
          </div>
          <div className="text-center">
            <div className="bg-yellow-700 rounded-full w-12 h-12 mx-auto flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 7h.01M17 7h.01M15 9h.01M17 9h.01M19 15l-7 7-4-4M5 17a4 4 0 110-8 4 4 0 010 8z" />
              </svg>
            </div>
            <p className="mt-2">Mobile Recharge</p>
          </div>
          <div className="text-center">
            <div className="bg-green-300 rounded-full w-12 h-12 mx-auto flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l6.16-3.422A2 2 0 0119 13.882v6.118a2 2 0 01-1 1.732l-6 3.332a2 2 0 01-2 0l-6-3.332A2 2 0 013 20V8a2 2 0 011-1.732l6-3.332a2 2 0 012 0l6 3.332A2 2 0 0119 8v6" />
              </svg>
            </div>
            <p className="mt-2">Coaching</p>
          </div>
          <div className="text-center">
            <div className="bg-purple-400 rounded-full w-12 h-12 mx-auto flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5h12M9 3v2m-4 8h8M9 13v2M5 21h8m4-6h4m-2-4h2m-6 0h4m-6 0h2m-6 0h2m6 4h2m-6 0h2m-6 0h2" />
              </svg>
            </div>
            <p className="mt-2">Skins</p>
          </div>
        </div>
      </div>
      {children}
    </div>
  )
}
