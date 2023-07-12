import React from 'react'
import { Button, InCartButton } from '../../../UI/Button'
import { ProductCardStyled, ProductImg, ProductInfo, ProductPrice, ProductPriceContainer } from './ProductCardStyled'
import { FormatPrice } from '../../../utils/FormatPrice'
import { RandomProduct, NewPrice } from '../../../data/products'
import { useDispatch, useSelector } from 'react-redux'
import { addCart } from '../../../../redux/cart/cartSlice'
import { AiOutlineCheckCircle } from 'react-icons/ai'

const ProductCard = ({title, img, price, id}) => {

  const cart = useSelector(state => state.cart.cart)

  let InCart = cart.find((product) => product.id == id)

  const dispatch = useDispatch()

  return (
    <ProductCardStyled>
    <ProductImg style={{backgroundImage:`url(${img})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}/>
        <ProductInfo>
            <h3>{title}</h3>
            <ProductPriceContainer>
              <ProductPrice>
                <small> {RandomProduct.title == title && FormatPrice(price)}  </small>
                { RandomProduct.title == title  ? FormatPrice(NewPrice) : FormatPrice(price) }
              </ProductPrice>
              {
                !InCart ? <Button onClick={() => dispatch(addCart({id, title, img, price}))}>Comprar</Button> : <InCartButton disabled={InCart}><AiOutlineCheckCircle/></InCartButton>
              }
              
            </ProductPriceContainer>
        </ProductInfo>
    </ProductCardStyled>
  )
}

export default ProductCard