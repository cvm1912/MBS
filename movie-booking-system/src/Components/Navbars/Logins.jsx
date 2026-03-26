import { MenuIcon, SearchIcon } from 'lucide-react'
import React from 'react'
import { useClerk, UserButton, useUser } from '@clerk/react'

const Logins = () => {
  const { user } = useUser()
  const { openSignIn } = useClerk()

  return (
    <div className='flex gap-2'>
      <div className='gap-4 hidden md:flex items-center'>
         <SearchIcon className='h-8 w-8'/>
         {user ? (
           <UserButton />
         ) : (
           <button onClick={openSignIn} className='text-2xl'>Login</button>
         )}
      </div>
    </div>
  )
}

export default Logins

