import { AiOutlineMenu } from "react-icons/ai";
import styled from "styled-components";


export const MenuStyled = styled.div`

display: flex;
gap: 20px;

:hover{
    color: var(--tertiary);
    transition: 0.5s;
}

@media (max-width: 900px) {

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




