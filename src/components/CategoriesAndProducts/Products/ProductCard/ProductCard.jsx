import React from 'react'
import { Button } from '../../../UI/Button'
import { ProductCardStyled, ProductImg, ProductInfo, ProductPrice, ProductPriceContainer } from './ProductCardStyled'
import { FormatPrice } from '../../../utils/FormatPrice'
import { RandomProduct, NewPrice } from '../../../data/products'
import { useDispatch } from 'react-redux'
import { addCart } from '../../../../redux/cart/cartSlice'

const ProductCard = ({title, img, price, id}) => {

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
              <Button onClick={() => dispatch(addCart({id, title, img, price}))}>Comprar</Button>
            </ProductPriceContainer>
        </ProductInfo>
    </ProductCardStyled>
  )
}

export default ProductCard