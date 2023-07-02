import styled from "styled-components";

export const CheckoutWrapper = styled.section`
min-height: 100vh;
width: 100%;
display: flex;
gap: 30px;
justify-content: center;
padding: 150px 30px;
flex-wrap: wrap;
align-items: center;
margin: 100px 0;

`

export const MyProductsContainer = styled.div`
border-radius: 10px;
height: 450px;
background: var(--background);
min-width: 300px;
width: 70%;
padding: 30px 20px;;
display: flex;
flex-direction: column;
overflow-y: scroll;

h3{
    font-size: 28px;
}
`

export const MyProducts = styled.ul`
width: 100%;
display: flex;
flex-direction: column;
gap: 30px;
padding:0;


`

export const Items = styled.li`
display: flex;
width:100%;
justify-content: space-between;
align-items: center;



`

export const ItemInfo = styled.div`
display: flex;
width:100%;
gap: 30px;


h3{
    font-size: 20px;
    overflow-x: hidden;
}

@media (max-width: 950px) {
    h3 {
        font-size: 12px;
    }
}

@media (max-width: 750px) {
    flex-direction: column;
    gap: 5px;
    h3 {
        display: none;
    }
}

`

export const ItemImg = styled.div`
width: 250px;
height: 120px;

@media (max-width: 950px) {
    width: 130px;
    height: 60px;
}

`

export const ItemPrice = styled.div`
display: flex;
gap: 20px;
color: var(--secondary);
font-size: 20px;

button{
    background: var(--background);
    border: none;
    color: #FF005C;
}

@media (max-width: 950px) {
    font-size: 12px;
    
}

@media (max-width: 750px) {
    font-size: 10px;
    gap: 10px;
}
`


export const MyPriceContainer = styled.div`

border-radius: 10px;
height: 450px;
background: var(--background);
min-width: 300px;
width: 25%;
padding: 30px;
display: flex;
flex-direction: column;
gap: 20px;
justify-content: space-between;
`

export const TotalPrice = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 30px;
    color: var(--primary);
    font-size: 20px;
    span{
        color: var(--secondary)
    }
`
export const Select = styled.select`
background: var(--background);
color: orange;

`

