import { Transition } from '@headlessui/react';
import React, { Dispatch, PropsWithChildren, SetStateAction, useContext, useState } from 'react'
import { createContext } from 'react'

interface OpenSearchBar {
  open: boolean,
  setOpen: Dispatch<SetStateAction<boolean>>
  toggleOpen: () => void
}

const SearchContext = createContext<OpenSearchBar>({
  open: false,
  setOpen: () => {},
  toggleOpen: () => {},
});

const SearchbarDropdown = ({children}: PropsWithChildren) => {
    const [open, setOpen] = useState(false)
    const toggleOpen = () => {
      setOpen((previousState) => !previousState)
    };

    return (
      <SearchContext.Provider value={{open, setOpen, toggleOpen}}>
        <div className='relative'>{children}</div>
      </SearchContext.Provider>
    )
  }
  
  interface TriggerProps {
    children: (props: { open: boolean }) => React.ReactNode;
  }

  const Trigger: React.FC<TriggerProps> = ({children}) => {
    const { open, toggleOpen} = useContext(SearchContext);
    return (
      <>
        <div onClick={toggleOpen}>{children({open})}</div>
        {open && <div className="fixed inset-0 z-40" onClick={() => toggleOpen()}></div>}
      </>
    )
  }

  const Content = ({align = 'right', width = '90', contentClasses = 'py-8 bg-white', children}: PropsWithChildren<{align?: 'left'|'right', width?: '90', contentClasses?: string }>) => {
    const {open, setOpen} = useContext(SearchContext);

    let alignmentClasses = 'origin-top'

    if (align === 'left') {
      alignmentClasses = 'ltr:origin-top-left rtl:origin-top-right start-0'
    } else if (align === 'right') {
      alignmentClasses = 'ltr:origin-top-right rtl:origin-top-left end-0'
    }

    let widthClasses = '';

    if (width === '90') {
      widthClasses = 'w-90';
    }

    return (
      <>
        <Transition
          show={open}
          enter="transition ease-out duration-200"
          enterFrom=""
        />
      </>
    )
  }
const SearchbarIcon = () => (
    <div className='absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none'>
        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
        </svg>
        <span className='sr-only'>Search icon</span>
    </div>
)

const SearchbarInput = () => (
    <div className='absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none'>
        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
        </svg>
        <span className='sr-only'>Search Bar</span>
        <span className='sr-only'>Search icon</span>
    </div>
)

const Searchbar = ({children}: PropsWithChildren) => {
    return (
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <div className="flex md:order-2 absolute right-2 top-6">
            <button type="button" data-collapse-toggle="navbar-search" aria-controls="navbar-search" aria-expanded="false" className="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 me-1">
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
              </svg>
              <span className="sr-only">Search</span>
            </button>
            <div className="text-3xl cursor-pointer hidden md:block">
              <SearchbarIcon />
              <input type="text" id="search-navbar" className="block p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-100 dark:border-gray-200 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..." />
            </div>
          </div>
    </div>
    )
}

export default Searchbar;