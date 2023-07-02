import React from 'react'
import { FaUserAlt } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { logOut } from '../../../redux/user/userSlice'
import { MenuStyled } from './NavbarMenuStyled'


const NavbarMenu = ({HiddenMenu}) => {
  const dispatch = useDispatch()
  const logged = useSelector(state => state.user.logUser)

  return (
    <MenuStyled HiddenMenu={HiddenMenu} >
      <Link to='/' >Home</Link> 

    {
      !logged && <Link to='/Login'> <FaUserAlt/>  Mi cuenta</Link>
    }

    {
      !logged && <Link to='/Register'>Registro</Link>
    }

    {
      logged && <button onClick={()=>dispatch(logOut())}>Cerrar Sesión</button>
    }
    
    </MenuStyled>
    
  )
}

export default NavbarMenu