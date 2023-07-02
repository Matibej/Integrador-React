import React from 'react'
import { ErrorContainer } from './ErrorStyled'
import {BiError} from 'react-icons/bi'

const Error = () => {

    

  return (
    <ErrorContainer>
        <span><BiError/></span>
        Página no encontrada
    </ErrorContainer>
  )
}

export default Error