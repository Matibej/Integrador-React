import { AiOutlineMenu } from "react-icons/ai";
import styled from "styled-components";


export const MenuStyled = styled.div`

display: flex;
gap: 20px;

a {transition: 0.5s;}

a:hover{
    color: var(--tertiary);
    transition: 0.5s;
}

button{
    color: var(--primary);
    background: var(--background-alt);
    border: none;
    font-weight: 600;
    :hover{
        color: var(--tertiary);
        transition: 0.5s;
    }
}

@media (max-width: 900px) {
display: ${({HiddenMenu})=> (!HiddenMenu ? 'none' : 'flex' )};
position: absolute;
top: 100px;
left: 5%;
right: 5%;
flex-direction: column;
border-radius: 0 0 20px 20px;
align-items: flex-start;
gap: 20px;
padding: 45px 30px;
background: var(--background)

}

`




