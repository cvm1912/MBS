import { XIcon } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

const MenuBar = () => {
  return (
    <>
      <div className='flex gap-8'>
        <XIcon className='md:hidden'/>
        <div className='hidden md:flex gap-8 bg-red-400 px-4 py-3 rounded-full'>
          <Link to="/">Home</Link>
          <Link to="/movie">Movie</Link>
          <Link to="/">Theaters</Link>
          <Link to="/">Released</Link>
          <Link to="/favourite">Favourite</Link>
        </div>
      </div>
    </>
  )
}

export default MenuBar



