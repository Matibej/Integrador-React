import React from 'react'
import styled from 'styled-components'
import Categories from './Categories/Categories'
import Products from './Products/Products'

export const CategoriesAndProductsStyled = styled.section`
max-width: 2000px;
display:flex;
width: 100%;
flex-wrap: wrap;
justify-content: center;
gap: 20px;

`


const CategoriesAndProducts = () => {
  return (
    <CategoriesAndProductsStyled>
        <Categories/>
        <Products/>
    </CategoriesAndProductsStyled>
  )
}

export default CategoriesAndProducts