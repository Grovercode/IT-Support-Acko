import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assests/icons/acko-logo.svg'

export const NavBar = () => {
  return (
    <nav>
      <img src={logo}/>
      <div className='links'>
        <Link className='link' to='/'>Help</Link>
        <Link className='link' to= 'request'>Login</Link>
        </div>
    </nav>
  )
}
