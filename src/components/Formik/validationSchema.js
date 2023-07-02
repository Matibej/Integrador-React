import * as Yup from 'yup'
import { RegexEmail } from '../utils/RegexEmail'




export const registerValidation = Yup.object({
    name: Yup.string().required('Campo requerido'),
    email: Yup.string().matches(RegexEmail, 'Email no válido').required('Campo requerido'),
    password: Yup.string().min(6, 'Mínimo 6 carácteres').required('Campo requerido')

})


export const loginValidation = Yup.object({
    email: Yup.string().matches(RegexEmail, 'Email no válido').required('Campo requerido'),
    password: Yup.string().min(6, 'Mínimo 6 carácteres').required('Campo requerido')
})