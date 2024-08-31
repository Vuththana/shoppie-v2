import React, { Dispatch, PropsWithChildren, SetStateAction, useContext, useState } from 'react'
import { createContext } from 'react'

interface SearchInputProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

const Searchbar: React.FC<SearchInputProps> = (children: PropsWithChildren) => {
    const [searchbarOpen, setSearchbarOpen] = useState(false)
    const toggleSearchBar = () => setSearchbarOpen(!searchbarOpen)

    return (
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <div className="flex md:order-2 absolute right-2 top-6">
            <button onClick={toggleSearchBar} type="button" data-collapse-toggle="navbar-search" aria-controls="navbar-search" aria-expanded="false" className="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 me-1">
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
              </svg>
              <span className="sr-only">Search</span>
            </button>
            <div className="text-3xl cursor-pointer hidden md:block">
              <input type="text" id="search-navbar" 
              className="block p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-100 dark:border-gray-200 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" 
              placeholder="Search..." 
              />
            </div>
          </div>
          <SearchBarResponsive isOpen={searchbarOpen} toggleSearchBar={toggleSearchBar}/>
    </div>
    
    )
}

const SearchBarResponsive = ({isOpen, toggleSearchBar}) => {
  return (
    <div className={`sm:hidden text-3xl cursor-pointer mx-auto ${isOpen ? 'block' : 'hidden'}`}>
    <input type="text" id="search-navbar"
    className='block p-2 ps-5 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500'
    placeholder='Search...'
    />
  </div>
  )
}


export default Searchbar;