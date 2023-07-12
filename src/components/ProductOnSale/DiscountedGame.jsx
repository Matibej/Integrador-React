import React from 'react'
import { Button, InCartButton } from '../UI/Button'
import {DiscountedGameContainer,DiscountedGameImg, DiscountedGameInfo, DiscountedGamePriceContainer, DiscountedGameTitle, PriceContainer, Sale, SaleContainer } from './DiscountedStyled'
import {NewPrice, RandomProduct} from '../data/products'
import { FormatPrice } from '../utils/FormatPrice'
import { useDispatch, useSelector } from 'react-redux'
import { addCart } from '../../redux/cart/cartSlice'
import { AiOutlineCheckCircle } from 'react-icons/ai'

const GameOnSale = () => {


  const dispatch = useDispatch()

  const {title, img, price, id } = RandomProduct;

  const cart = useSelector(state => state.cart.cart)

  let InCart = cart.find((product) => product.id == id)

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
        {
          !InCart ? <Button onClick={() => dispatch(addCart({id, title, img, price}))}>Comprar</Button>  : <InCartButton disabled={InCart}><AiOutlineCheckCircle/></InCartButton>
        }
        
      </DiscountedGamePriceContainer>
    </DiscountedGameInfo>
  </DiscountedGameContainer>
  )
}

export default GameOnSale