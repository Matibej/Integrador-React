import styled from "styled-components";
import { Form as FormikForm } from "formik";

export const LoginStyled = styled.div`
height: 100%;
display: flex;
width: 100%;
justify-content: center;
align-items: center;
padding: 150px 0;

@media (min-width: 2000px) {
    height: 100vh;
}

`



export const FormContainer = styled.div`

min-height: 350px;
max-height: 650px;
padding: 20px 0;
width: 35%;
min-width: 300px;
border-radius: 10px;
background: var(--background);
display:flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 20px;

a{
    color: var(--tertiary);
}

a:hover{
    text-decoration: underline;
}

`

export const Form = styled(FormikForm)`

width: 100%;
display: flex;
flex-direction: column;
gap: 30px;
align-items: center;

button{
    height: 30px;
    width: 150px;
    border-radius: 5px;
    color: white;
    background: purple;
    font-weight: 600;
    border: none;
}

@media (max-width: 950px) {
    font-size: 14px;
}

`

export const InputContainer = styled.div`

width: 100%;
padding: 0px 50px;
display: flex;
flex-direction: column;
gap: 5px;


small{
    color: red;
    font-size: 12px;
    padding: 0 10px;
}

@media (max-width: 950px) {
    padding: 0 30px;
}

`

export const InputStyled = styled.input`
    height: 35px;
    padding: 2px 10px;
    border: ${({ IsError }) => IsError ? '1px solid red ' : 'none'};
    border-radius: 5px;
    background: var(--background-alt);
    font-size: 15px;
    color: white;
    outline: none;



`