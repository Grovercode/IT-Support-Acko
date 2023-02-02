import React from 'react'
import { useNavigate } from 'react-router-dom'
import logo from '../assests/icons/acko-logo.svg'
import { NavStyle, NavDiv, NavLink, NavLogo} from '../styled/NavStyle'

export const NavBar = () => {

  const navigate = useNavigate()
  const clickHandler = () =>{
    navigate('/')
  }
  return (
    <NavStyle>
      <NavLogo onClick={clickHandler} src={logo}/>
      <NavDiv >
        <NavLink  to='/'>Help</NavLink>
        <NavLink >Login</NavLink>
      </NavDiv>
    </NavStyle>
  )
}
