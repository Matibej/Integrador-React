import React from 'react'
import { AiOutlineCheckCircle } from 'react-icons/ai'
import { CongratsContainer } from './FelicitacionesStyled'

const Felicitaciones = () => {
  return (
    <CongratsContainer>
      <span><AiOutlineCheckCircle/></span>
      ¡Gracias por su compra!
    </CongratsContainer>
  )
}

export default Felicitaciones