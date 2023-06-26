import styled from "styled-components";

export const ModalCartStyled = styled.div`

position:absolute;
top: 100px;
right: 20px;
width: 500px;
display: ${({asd}) => asd && 'flex'};
flex-direction: column;
z-index: 99;
border-radius: 0 0 5px 5px;

`


export const CartTotal = styled.div`

height: 50px;
padding: 5px;
display: flex;
justify-content: space-between;
gap: 10px;
align-items: center;
background: var(--gradient-background );

button{
    width: 70px;
    font-size: 13px;
    height: 30px;
    background: darkgreen;
}

`

export const TotalProducts = styled.div`

display: flex;
width: 100%;
align-items: center;
justify-content: space-between;

`

export const TotalPrice = styled.span`

color: var(--secondary);

`

export const CartList = styled.ul`
max-height: 600px;
display: flex;
flex-direction: column;
background: var(--background);
padding: 5px;
`

export const ProductCardContainer = styled.li`
display: flex;
justify-content: space-between;
padding: 5px;
gap: 10px;
align-items: center;


button{
    background:none;
    color: #FF005C;
    border: none;
    font-size: 18px;
    cursor: pointer;
}

`

export const ProductTemplate = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
align-items: center;
color: var(--secondary);



`

export const ProductInfo = styled.div`
width: 100%;
display: flex;
gap: 10px;
color: var(--primary);


`


export const ProductCardIng = styled.div`
height: 60px;
width: 120px;
`