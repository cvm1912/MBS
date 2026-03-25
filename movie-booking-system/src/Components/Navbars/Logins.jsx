import { MenuIcon, SearchIcon } from 'lucide-react'
import React from 'react'

const Logins = () => {
  return (
    <div className='flex gap-2'>
      <div className='gap-4 hidden md:flex'>
         <SearchIcon className='h-8 w-8'/>
         <button className='text-2xl'>Login</button>
      </div>
      <MenuIcon className='md:hidden h-8 w-8'/>
    </div>
  )
}

export default Logins


//   <div className="flex items-center gap-8 cursor-pointer ">
//         <Search className="w-6 h-6" />
//         <button className="px-4 py-1 sm:px-7 sm:py-2 bg-primary hover:bg-primary-dull transition rounded-full font-medium cursor-pointer">
//           Login
//         </button>
//       </div>
//       <MenuIcon className="md:hidden w-8 h-8 cursor-pointer" />