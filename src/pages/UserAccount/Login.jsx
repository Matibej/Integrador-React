import { ErrorMessage, Field, Formik } from 'formik'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { loginInitialValues } from '../../components/Formik/initialValues'
import { loginValidation } from '../../components/Formik/validationSchema'
import { logUser } from '../../redux/user/userSlice'
import { InputContainer, FormContainer, Form, LoginStyled, InputStyled } from './UserAccountStyled'

const Login = () => {

  const dispatch = useDispatch()
  const existingUser = useSelector(state => state.user.user)

  const navigate = useNavigate()

  return (
    <LoginStyled>
        <FormContainer>
            <h2>Ingresa a tu cuenta</h2>
            <Formik
            initialValues={loginInitialValues}
            validationSchema={loginValidation}
            onSubmit={(values, actions)=> {
              dispatch(logUser({email: values.email, password: values.password})),
              console.log(existingUser.password == values.password);
              actions.resetForm()
            }
            }
            >
               {({errors, touched})=>(    

                <Form>
                  <InputContainer>
                    <Field as={InputStyled} name='email' type="text" placeholder='Ingresa tu email' IsError={errors.email && touched.email}/>
                    <ErrorMessage name='email' component={'small'}/>
                  </InputContainer>
                <InputContainer>
                    <Field as={InputStyled} name='password' type="password" placeholder='Ingresa tu contraseña' IsError={errors.password && touched.password}/>
                    <ErrorMessage name='password' component={'small'}/>
                </InputContainer>
                <Link to='/register'>
                  ¿No tenes cuenta? Registrate acá.
                </Link>
                <button type='submit'>Ingresar</button>
              </Form>
               )}
            
            </Formik>
        </FormContainer>
    </LoginStyled>
  )
}

export default Login