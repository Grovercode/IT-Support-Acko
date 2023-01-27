import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import logo from '../assests/icons/acko-logo.svg'
import { Navigate } from 'react-router-dom'



export const NavBar = () => {

  const navigate = useNavigate()
  const clickHandler = () =>{
    navigate('/')
  }
  return (
    <nav>
      <img className='ackoLogo' onClick={clickHandler} src={logo}/>
      <div className='links'>
        <Link className='link' to='/'>Help</Link>
        <Link className='link' to= 'request'>Login</Link>
        </div>
    </nav>
  )
}
