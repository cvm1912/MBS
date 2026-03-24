import React from 'react'
import { Link } from 'react-router-dom'
import { assets } from '../../assets/assets'

const Logo = (props) => {
  return (
    <div>
        <Link>
          <img src={props.assets} alt='logo' />
       </Link>
    </div>
  )
}

export default Logo
