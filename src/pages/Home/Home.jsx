import React from 'react'
import ReactCarousel from '../../components/Carousel/ReactCarousel'
import CategoriesAndProducts from '../../components/CategoriesAndProducts/CategoriesAndProducts'
import DiscountedGame from '../../components/ProductOnSale/DiscountedGame'
import { HomeWrapper } from './HomeStyled'



const Home = () => {
  return (
    <HomeWrapper>
       <ReactCarousel/>
       <DiscountedGame/>
       <CategoriesAndProducts/>
    </HomeWrapper>
  )
}

export default Home