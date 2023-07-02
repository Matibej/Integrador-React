import React from 'react'
import {FaShoppingCart} from "react-icons/fa"
import { useSelector } from 'react-redux'
import { CartStyled } from '../HeaderStyled'

const Cart = ({HiddenCart, setHiddenCart}) => {

  const cart = useSelector(state => state.cart.cart)
  
  return (
    <CartStyled  onClick={() => setHiddenCart(!HiddenCart)} >
        <FaShoppingCart/>
        <span>{cart.length}</span>
    </CartStyled>
  )
}

export default Cart