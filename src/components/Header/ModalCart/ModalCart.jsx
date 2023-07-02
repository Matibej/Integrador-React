import React from 'react'
import { useSelector } from 'react-redux'
import { Button } from '../../UI/Button'
import { FormatPrice } from '../../utils/FormatPrice'
import { CartList, CartTotal, ModalCartStyled, TotalPrice, TotalProducts } from './ModalCartStyled'
import ProductCard from './ProductCard'
import { RandomProduct, NewPrice } from '../../data/products'


const ModalCart = () => {

  

  const cart = useSelector(state => state.cart.cart);

  

  const isRandomInCart = cart.find( (product) => product.id ==  RandomProduct.id  )

  
  let total = cart.reduce((acc, curr)=>{
      return acc += curr.price
  }, 0)

  if (isRandomInCart) {
    total = total - NewPrice
  }
 
  return (
    <ModalCartStyled>
        <CartTotal>
            <TotalProducts>
                Tenes {cart.length} productos:
                <TotalPrice>{FormatPrice(total)}</TotalPrice>
            </TotalProducts>
            <Button>Comprar</Button>
        </CartTotal>
        <CartList>
            {
              cart && cart.map((item)=> {
               return <ProductCard {...item} key={item.id}/>
              })
            } 
            {
              !cart.length && <p>Todavía no posee productos en su carrito</p>
            }
        </CartList>
    </ModalCartStyled>
  )
}

export default ModalCart