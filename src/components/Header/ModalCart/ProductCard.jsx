import React from 'react'
import { ProductCardContainer, ProductCardIng, ProductInfo, ProductTemplate } from './ModalCartStyled'
import {BsFillTrash3Fill} from 'react-icons/bs'
import { FormatPrice } from '../../utils/FormatPrice'
import { useDispatch } from 'react-redux'
import { removeItem } from '../../../redux/cart/cartSlice'
import { RandomProduct, NewPrice } from '../../data/products'



const ProductCard = ({id, title, img, price}) => {

  const dispatch = useDispatch()

  return (
    <ProductCardContainer>
        <ProductTemplate>
            <ProductInfo>
            <ProductCardIng style={{backgroundImage:`url(${img})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}/>
            {title}
            </ProductInfo>
            { RandomProduct.id == id  ? FormatPrice(NewPrice) : FormatPrice(price) }
        </ProductTemplate>
        <button onClick={()=>dispatch(removeItem({id}))}><BsFillTrash3Fill/></button>
    </ProductCardContainer>
  )
}

export default ProductCard