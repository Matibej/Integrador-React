import React from 'react'
import ProductCard from './ProductCard/ProductCard'
import { ProductsContainer, ProductsSectionStyled } from './ProductsStyled'
import ShowMore from './ShowMoreProducts/ShowMore'
import { useSelector } from 'react-redux'
import { RandomProduct, NewPrice } from '../../data/products'
import { useState } from 'react'


const Products = () => {

  let products = useSelector(state => state.products.products)
  const selectedCategory = useSelector(state => state.categories.selectedCategory)

  if (selectedCategory) {
    products = {
      [selectedCategory]: products[selectedCategory]
    }
  }




  const [Limit, setLimit] = useState(6)

  return (
    <ProductsSectionStyled>
        <ProductsContainer>
          {
            Object.entries(products).map(([,product])=>{
              return product.map((game) => { 
                if (Limit >= game.id || selectedCategory) {
                  return <ProductCard {...game} RandomProduct={RandomProduct} NewPrice={NewPrice} key={game.id}/>
                }
                return null
                })
            })
          }        
        </ProductsContainer>
        {
          !selectedCategory && <ShowMore Limit={Limit} setLimit={setLimit} />
        }
    </ProductsSectionStyled>
  )
}

export default Products