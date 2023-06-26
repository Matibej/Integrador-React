import React from 'react'
import { FooterLinksStyled, FooterStyled } from './FooterStyled'

const Footer = () => {
  return (
    <FooterStyled>
        <FooterLinksStyled>
          <a href="#">Términos de uso</a>
          <a href="#">Trabajá con nosotros</a>
          <a href="#">Soporte</a>
        </FooterLinksStyled>
        <span>Hecho en React</span>
    </FooterStyled>
  )
}

export default Footer