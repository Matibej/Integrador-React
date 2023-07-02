import React from 'react'
import { Button } from '../UI/Button'
import {DiscountedGameContainer,DiscountedGameImg, DiscountedGameInfo, DiscountedGamePriceContainer, DiscountedGameTitle, PriceContainer, Sale, SaleContainer } from './DiscountedStyled'
import {NewPrice, RandomProduct} from '../data/products'
import { FormatPrice } from '../utils/FormatPrice'
import { useDispatch } from 'react-redux'
import { addCart } from '../../redux/cart/cartSlice'

const GameOnSale = () => {


  const dispatch = useDispatch()

  const {title, img, price, id } = RandomProduct;

 

  return (
    <DiscountedGameContainer>
    <DiscountedGameImg style={{backgroundImage:`url(${img})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }} />
    <DiscountedGameInfo>
      <DiscountedGameTitle>
        <h2>OFERTA ESPECIAL:</h2>
        {title}
      </DiscountedGameTitle>
      <DiscountedGamePriceContainer>
        <SaleContainer>
          <PriceContainer>
            <small>
            {FormatPrice(price)}
          </small>
          <span>
          {FormatPrice(NewPrice)}
          </span>
          </PriceContainer>
          <Sale>
            %50
          </Sale>
        </SaleContainer>
        <Button onClick={() => dispatch(addCart({id, title, img, price}))}>Comprar</Button>
      </DiscountedGamePriceContainer>
    </DiscountedGameInfo>
  </DiscountedGameContainer>
  )
}

export default GameOnSale