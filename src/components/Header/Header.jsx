import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Cart from './CartIcon/Cart'
import { HeaderStyled, MenuIcon, NavbarStyled } from './HeaderStyled'
import ModalCart from './ModalCart/ModalCart'
import NavbarMenu from './NavbarMenu/NavbarMenu'



const Header = () => {


const [HiddenCart, setHiddenCart] = useState(true)



  return (
    <HeaderStyled>
        <Link to='/'>
        <img src="https://res.cloudinary.com/dvpudmsor/image/upload/v1687226337/LOGO_TEMPLATER_-_Made_with_PosterMyWall_tdo5ce.png" 
        alt="logo" />
        </Link>
        <NavbarStyled>
            <NavbarMenu/>
            <MenuIcon/>
            <Cart HiddenCart = {HiddenCart} setHiddenCart={setHiddenCart} />
        </NavbarStyled>
        {!HiddenCart && <ModalCart/>} 
    </HeaderStyled>
  )
}

export default Header
