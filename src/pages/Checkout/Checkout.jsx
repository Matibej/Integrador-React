import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { NewPrice, RandomProduct } from '../../components/data/products'
import { FormatPrice } from '../../components/utils/FormatPrice'
import CheckoutProduct from './CheckoutProduct'
import { CheckoutWrapper, MyPriceContainer, MyProducts, MyProductsContainer, Select, TotalPrice } from './CheckoutStyled'

const Checkout = () => {
  

  const cart = useSelector(state => state.cart.cart);

  const isRandomInCart = cart.find( (product) => product.id ==  RandomProduct.id  )

  
  let total = cart.reduce((acc, curr)=>{
      return acc += curr.price
  }, 0)

  if (isRandomInCart) {
    total = total - NewPrice
  }


  return (
    <CheckoutWrapper>
        <MyProductsContainer>
            <h3>
                Mis productos
            </h3>
            <MyProducts>
            {
              cart && cart.map((item)=> {
               return <CheckoutProduct {...item} key={item.id}/>
              })
            } 

            {
              !cart.length && <p style={{alignSelf: 'center', fontSize:'20px'}}>Todavía no posee productos en su carrito</p>
            }   
            </MyProducts>
        </MyProductsContainer>
        <MyPriceContainer>
            <TotalPrice>
                <h3>Total: <span>{FormatPrice(total)}</span></h3>
                <label htmlFor='payment'>
                    Opciones de pago:
                </label>
                <Select name='payment'>
                    <option>Tarjeta de crédito</option>
                    <option>Tarjeta de débito</option>
                </Select>
            </TotalPrice>
            {
              cart.length > 0  && <Link to='/felicitaciones'>Confirmar compra</Link>
           }
           
        </MyPriceContainer>
    </CheckoutWrapper>
  )
}

export default Checkout