import React from 'react'
import {FaShoppingCart} from "react-icons/fa"
import { CartStyled } from '../HeaderStyled'

const Cart = ({HiddenCart, setHiddenCart}) => {
  
  return (
    <CartStyled  onClick={() => setHiddenCart(!HiddenCart)} >
        <FaShoppingCart/>
        <span>0</span>
    </CartStyled>
  )
}

export default Cart