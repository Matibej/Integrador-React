import { AiOutlineMenu } from "react-icons/ai";
import styled from "styled-components";


export const HeaderStyled = styled.header`
height: 100px;
background-color: var(--background-alt);
display: flex;
justify-content: space-between;
align-items: center;
padding: 0 30px;
position: fixed;
width: 100%;
z-index: 3;

img{
    height: 110px;
    width: 130px;
}

`

export const NavbarStyled = styled.nav`

display: flex;
justify-content: center;
align-items: center;
gap: 20px;

`


export const CartStyled = styled.div`
display: flex;
position: relative;
cursor: pointer;
gap: 5px;
align-items: center;

`




export const MenuIcon = styled(AiOutlineMenu) `
 font-size: 25px;
 display: none;
 cursor: pointer;

@media (max-width: 900px) {

 display: block;

}

`