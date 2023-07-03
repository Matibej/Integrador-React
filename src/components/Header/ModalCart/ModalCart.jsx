import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FormatPrice } from '../../utils/FormatPrice'
import { CartList, CartTotal, ModalCartStyled, TotalPrice, TotalProducts } from './ModalCartStyled'
import ProductCard from './ProductCard'
import { RandomProduct, NewPrice } from '../../data/products'
import { BsFillTrash3Fill } from 'react-icons/bs'
import { clearCart } from '../../../redux/cart/cartSlice'
import { Link } from 'react-router-dom'


const ModalCart = () => {

  const dispatch = useDispatch()  

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
                <div style={{display: 'flex', gap: 5, alignItems: 'center'}}>
                <button onClick={()=>dispatch(clearCart())}><BsFillTrash3Fill/></button>
                <TotalPrice>{FormatPrice(total)}</TotalPrice>
                </div>
            </TotalProducts>
            <Link to='/checkout'>Comprar</Link>
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