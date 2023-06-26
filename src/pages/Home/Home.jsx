import React from 'react'
import styled from 'styled-components'
import ReactCarousel from '../../components/Carousel/ReactCarousel'
import CategoriesAndProducts from '../../components/CategoriesAndProducts/CategoriesAndProducts'
import GameOnSale from '../../components/ProductOnSale/GameOnSale'
import { HomeWrapper } from './HomeStyled'



const Home = () => {
  return (
    <HomeWrapper>
       <ReactCarousel/>
       <GameOnSale/>
       <CategoriesAndProducts/>
    </HomeWrapper>
  )
}

export default Home