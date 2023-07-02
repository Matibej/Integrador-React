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
height: 130px;

`

export const ProductInfo = styled.div`
padding: 5px 10px;
height: 110px;
display: flex;
flex-direction: column;
justify-content: space-between;


h3{
    color: var(--primary);
    font-size: 18px;
}

`

export const ProductPriceContainer = styled.div`
width: 100%;
padding: 5px;
display: flex;
justify-content: space-between;
align-items: center;


button{
    height: 35px;
    font-size: 18px;
    width: 90px;
    padding: 1px;
}

`



export const ProductPrice = styled.div`
font-size:18px;
color: var(--secondary);
display:flex;
flex-direction: column;
align-items: center;


small{
    color: var(--primary);
    text-decoration: line-through;
    font-size: 10px;
}

@media (max-width: 450px) {
    display: flex;
    flex-direction: column;
    font-size: 18px;
    gap: 0;
small{
    font-size: 10px;
}

}

`