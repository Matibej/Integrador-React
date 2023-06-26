import React from 'react'
import { InputContainer, FormContainer, Form, LoginStyled } from './UserAccountStyled'

const Login = () => {
  return (
    <LoginStyled>
        <FormContainer>
            <h2>Registra tu cuenta</h2>
            <Form>
                <InputContainer>
                <input type="text" placeholder='Ingresa tu usuario' />
                </InputContainer>
                <InputContainer>
                <input type="password" placeholder='Ingresa tu contraseña' />
                
                </InputContainer>
                <InputContainer>
                <input type="password" placeholder='Repite tu contraseña' />
                
                </InputContainer>
                <button>Registrar</button>
            </Form>
        </FormContainer>
    </LoginStyled>
  )
}

export default Login