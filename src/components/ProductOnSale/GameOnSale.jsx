import React from 'react'
import { Button } from '../UI/Button'
import { GameOnSaleContainer, GameOnSaleImg, GameOnSaleInfo, GameOnSalePrice, GameOnSalePriceContainer, GameOnSaleTitle } from './GameOnSaleStyled'

const GameOnSale = () => {
  return (
    <GameOnSaleContainer>
    <GameOnSaleImg style={{background: "url(https://cdn.cloudflare.steamstatic.com/steam/apps/292030/header.jpg?t=1675178392) no-repeat center/cover "}} />
    <GameOnSaleInfo>
      <GameOnSaleTitle>
        <h2>OFERTA ESPECIAL:</h2>
        The Witcher 3 - The Wild Hunt
      </GameOnSaleTitle>
      <GameOnSalePriceContainer>
        <GameOnSalePrice>
          <small>
            $20000
          </small>
          <span>
            $10000
          </span>
          <span>
            %50
          </span>
        </GameOnSalePrice>
        <Button>Comprar</Button>
      </GameOnSalePriceContainer>
    </GameOnSaleInfo>
  </GameOnSaleContainer>
  )
}

export default GameOnSale