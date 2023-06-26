import React from 'react'
import { ProductCardContainer, ProductCardIng, ProductInfo, ProductTemplate } from './ModalCartStyled'
import {BsFillTrash3Fill} from 'react-icons/bs'

const ProductCard = () => {
  return (
    <ProductCardContainer>
        <ProductTemplate>
            <ProductInfo>
            <ProductCardIng style={{background: "url(https://cdn.cloudflare.steamstatic.com/steam/apps/292030/header.jpg?t=1675178392) no-repeat center/cover "}}/>
            The Witcher 3
            </ProductInfo>
            $000000
        </ProductTemplate>
        <button><BsFillTrash3Fill/></button>
    </ProductCardContainer>
  )
}

export default ProductCard