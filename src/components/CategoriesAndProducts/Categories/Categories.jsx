import React from 'react'
import { CategoriesContainerStyled, CategoriesStyled } from './CategoriesStyled'
import {useDispatch, useSelector} from 'react-redux'
import {selectCategory} from '../../../redux/categories/CategoriesSlice'

const Categories = () => {

  const categories = useSelector(state => state.categories.categories)
  const selectedCategory = useSelector(state => state.categories.selectedCategory)

  const dispatch = useDispatch();

  return (
    <CategoriesContainerStyled>
        {
          categories.map((category, index)=>{
            return <CategoriesStyled 
            onClick={()=>dispatch(selectCategory(category))} 
            key={index} 
            selected={category===selectedCategory}
            >
              
                  {category}
              </CategoriesStyled>
          })
        }
    </CategoriesContainerStyled>
  )
}

export default Categories