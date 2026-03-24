import React from 'react'
import { Link } from 'react-router-dom'
import { assets } from '../../assets/assets'

const Logo = (props) => {
  return (
    <div>
        <Link className='max-md:flex-1'>
          <img src={props.assets} alt='logo' className='w-36 h-auto' />
       </Link>
    </div>
  )
}

export default Logo
