import styled from "styled-components"

export const ProductCardStyled = styled.div`

width: 300px;
height: 250px;
background: var(--background-alt);
display: flex;
flex-direction: column;
border-radius: 5px;
gap: 10px;
box-shadow: 0 0 5px black;

`

export const ProductImg = styled.div`

width: 100%;
height: 50%;

`

export const ProductInfo = styled.div`
padding: 10px;
display: flex;
flex-direction: column;
gap: 40px;

h3{
    color: var(--primary);
    font-size: 20px;
}

`

export const ProductPriceContainer = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
padding: 0 5px;

button{
    height: 90%;
    font-size: 18px;
    width: 90px;
    padding: 1px;
}

`



export const ProductPrice = styled.div`

font-size:23px;
color: var(--secondary);
display:flex;
gap: 5px;
align-items: center;

small{
    color: var(--primary);
    text-decoration: line-through;
    font-size: 17px;
}

@media (max-width: 450px) {
    display: flex;
    flex-direction: column;
    font-size: 18px;
    gap: 0;
small{
    font-size: 15px;
}

}

`