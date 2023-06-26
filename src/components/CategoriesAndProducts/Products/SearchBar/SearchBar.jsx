import React from 'react'
import { SearchBarContainerStyled, SearchBarStyled, SearchButton } from './SearchBarStyled'
import {AiOutlineSearch} from 'react-icons/ai'

const SearchBar = () => {
  return (
    <SearchBarContainerStyled>
        <SearchBarStyled placeholder='Padre dame piernas'/>
        <SearchButton> <AiOutlineSearch/> </SearchButton>
    </SearchBarContainerStyled>
  )
}

export default SearchBar