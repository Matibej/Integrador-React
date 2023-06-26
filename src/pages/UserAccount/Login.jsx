import React from 'react'
import { InputContainer, FormContainer, Form, LoginStyled } from './UserAccountStyled'

const Login = () => {
  return (
    <LoginStyled>
        <FormContainer>
            <h2>Ingresa a tu cuenta</h2>
            <Form>
                <InputContainer>
                <input type="text" placeholder='Ingresa tu usuario' />
                
                </InputContainer>
                <InputContainer>
                <input type="password" placeholder='Ingresa tu contraseña' />
                
                </InputContainer>
                <button>Ingresar</button>
            </Form>
        </FormContainer>
    </LoginStyled>
  )
}

export default Login