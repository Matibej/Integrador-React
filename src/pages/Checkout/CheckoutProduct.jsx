import React from 'react'
import { BsFillTrash3Fill } from 'react-icons/bs'
import { useDispatch } from 'react-redux'
import { removeItem } from '../../redux/cart/cartSlice'
import { NewPrice, RandomProduct } from '../../components/data/products'
import { FormatPrice } from '../../components/utils/FormatPrice'
import { ItemImg, ItemInfo, ItemPrice, Items } from './CheckoutStyled'

const CheckoutProduct = ({title, price, img, id}) => {

    const dispatch = useDispatch();

  return (
    <Items>
        <ItemInfo>
            <ItemImg style={{backgroundImage:`url(${img})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}/>
            <h3>{title}</h3>
        </ItemInfo>
        <ItemPrice>
            { RandomProduct.id == id  ? FormatPrice(NewPrice) : FormatPrice(price) }
            <button onClick={()=>dispatch(removeItem({id}))}><BsFillTrash3Fill/></button>
        </ItemPrice>
    </Items>
  )
}

export default CheckoutProduct