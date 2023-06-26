import styled from "styled-components";

export const LoginStyled = styled.div`
height: 90vh;
display: flex;
width: 100%;
justify-content: center;
align-items: center;
padding: 70px 0;

`



export const FormContainer = styled.div`
margin-top: 100px;
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
gap: 30px;

`

export const Form = styled.form`

width: 100%;
display: flex;
flex-direction: column;
gap: 50px;
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

`

export const InputContainer = styled.div`

width: 100%;
padding: 0px 50px;
display: flex;
flex-direction: column;
gap: 5px;

input{
    height: 45px;
    padding: 2px 10px;
    border: none;
    border-radius: 5px;
    background: var(--background-alt);
    font-size: 20px;
    color: white;
    outline: none;
}

small{
    color: red;
    font-size: 15px;
    padding: 0 10px;
}

`