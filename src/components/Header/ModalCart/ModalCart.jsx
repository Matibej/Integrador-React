import React from 'react'
import { useState } from 'react'
import { Button } from '../../UI/Button'
import { CartList, CartTotal, ModalCartStyled, TotalPrice, TotalProducts } from './ModalCartStyled'
import ProductCard from './ProductCard'



const ModalCart = () => {

 
  return (
    <ModalCartStyled>
        <CartTotal>
            <TotalProducts>
                Tenes 0 productos:
                <TotalPrice>$000000</TotalPrice>
            </TotalProducts>
            <Button>Comprar</Button>
        </CartTotal>
        <CartList>
            <ProductCard />
        </CartList>
    </ModalCartStyled>
  )
}

export default ModalCart