import React from 'react'
import { assets } from '../../assets/assets'
import Logo from './Logo'

const Navbar = () => {
  return (
    <div className='fixed top-0 left- w-full  py-6 px-6 lg:px-36 md:px-16 '>
       <Logo assets={assets.logo}/>
     
    </div>
  )
}

export default Navbar

{/* <div className=' z-50 flex items-center justify-between '> */}