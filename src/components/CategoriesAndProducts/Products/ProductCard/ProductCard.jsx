import React from 'react'
import { Button } from '../../../UI/Button'
import { ProductCardStyled, ProductImg, ProductInfo, ProductPrice, ProductPriceContainer } from './ProductCardStyled'

const ProductCard = () => {
  return (
    <ProductCardStyled>
    <ProductImg style={{background: "url(https://cdn.cloudflare.steamstatic.com/steam/apps/292030/header.jpg?t=1675178392) no-repeat center/cover "}}/>
        <ProductInfo>
            <h3>The Witcher 3</h3>
            <ProductPriceContainer>
              <ProductPrice>
                <small>$19999</small>
                $199999
              </ProductPrice>
              <Button>Comprar</Button>
            </ProductPriceContainer>
        </ProductInfo>
    </ProductCardStyled>
  )
}

export default ProductCard