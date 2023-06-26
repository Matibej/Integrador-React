import React from 'react'
import { FaUserAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { MenuStyled } from './NavbarMenuStyled'


const NavbarMenu = () => {
  return (
    <MenuStyled>
    <Link to='/' >Home</Link>     
    <Link to='/Login'> <FaUserAlt/>  Mi cuenta</Link>
    <Link to='/Register'>Registro</Link>
    </MenuStyled>
    
  )
}

export default NavbarMenu