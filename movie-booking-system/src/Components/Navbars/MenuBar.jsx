import { XIcon } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

const MenuBar = ({ isOpen, setIsOpen }) => {
  return (
    <>
      <div className={`fixed top-0 left-0 h-screen bg-black/90 flex flex-col items-center justify-center gap-8 z-50 transition-all duration-300 md:relative md:h-auto md:bg-red-400 md:flex-row md:px-4 md:py-3 md:rounded-full md:w-auto ${isOpen ? 'w-full' : 'w-0 max-md:overflow-hidden'}`}>
        <XIcon className='md:hidden absolute top-6 right-6 w-6 h-6 cursor-pointer' onClick={() => setIsOpen(false)}/>
        <Link to="/">Home</Link>
        <Link to="/movie">Movie</Link>
        <Link to="/">Theaters</Link>
        <Link to="/">Released</Link>
        <Link to="/favourite">Favourite</Link>
      </div>
    </>
  )
}

export default MenuBar



