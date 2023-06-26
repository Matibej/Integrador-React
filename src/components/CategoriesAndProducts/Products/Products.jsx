import React from 'react'
import ProductCard from './ProductCard/ProductCard'
import { ProductsContainer, ProductsSectionStyled } from './ProductsStyled'
import SearchBar from './SearchBar/SearchBar'
import ShowMore from './ShowMoreProducts/ShowMore'

const Products = () => {
  return (
    <ProductsSectionStyled>
        <SearchBar/>
        <ProductsContainer>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          
        </ProductsContainer>
        <ShowMore/>
    </ProductsSectionStyled>
  )
}

export default Products