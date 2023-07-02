import React from 'react'
import { InputContainer, FormContainer, Form, LoginStyled } from './UserAccountStyled'
import { Link, useNavigate } from 'react-router-dom'
import {ErrorMessage, Field, Formik} from 'formik'
import { registerInitialValues } from '../../components/Formik/initialValues'
import { registerValidation } from '../../components/Formik/validationSchema'
import { useDispatch, useSelector } from 'react-redux'
import {setUser} from '../../redux/user/userSlice'

const Login = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const user = useSelector(state => state.user.user)

  return (
    <LoginStyled>
        <FormContainer>
            <h2>Registra tu cuenta</h2>
          <Formik
            initialValues={registerInitialValues}
            validationSchema={registerValidation}
            onSubmit={(values, actions) =>{
            dispatch(setUser({name: values.name , email: values.email, password: values.password })),
            actions.resetForm()
            if (user) {
              navigate('/Login')
            }
            }
            }
          >
            {({errors})=>(
              <Form > 
                <InputContainer>
                <Field name='name' type="text" placeholder='Ingresa un nombre de usuario' IsError={errors.name} />
                <ErrorMessage name='name' component={'small'}/>
                </InputContainer>
                <InputContainer>
                <Field name='email' type="mail" placeholder='Ingresa un email'  />
                <ErrorMessage name='email' component={'small'}/>
                </InputContainer>
                <InputContainer>
                <Field name='password' type="password" placeholder='Ingresa una contraseña' />
                <ErrorMessage name='password' component={'small'}/>
                </InputContainer>
                <Link to='/login'>
                    ¿Ya tenes cuenta? Inicia sesión acá.
                </Link>
                <button type='submit'>Registrar</button>
            </Form>
            )}
          </Formik>
        </FormContainer>
    </LoginStyled>
  )
}

export default Login