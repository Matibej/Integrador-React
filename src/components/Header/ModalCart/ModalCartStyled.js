import styled from "styled-components";

export const ModalCartStyled = styled.div`

position:absolute;
top: 100px;
right: 20px;
width: 500px;
display: flex;
flex-direction: column;
z-index: 5;
border-radius: 0 0 5px 5px;

@media (max-width: 550px) {
  width: 100%;
  right: 0;
}


`


export const CartTotal = styled.div`

height: 50px;
padding: 5px;
display: flex;
justify-content: space-between;
gap: 10px;
align-items: center;
background: var(--gradient-background );


 a {
    padding: 5px;
    border-radius: 5px;
    width: 70px;
    font-size: 13px;
    height: 30px;
    border: 1px solid lightgreen;
    background-color: var(--background);
    color: lightgreen;
}

a:hover{
  background-color: lightgreen;
  color: var(--background);
}

`

export const TotalProducts = styled.div`

display: flex;
width: 100%;
align-items: center;
justify-content: space-between;
button{
  font-size: 15px;
  width: 20px;
  background: var(--gradient-background );
  border: none;
  padding: 1px;
  color: red;
}

`

export const TotalPrice = styled.span`

color: var(--secondary);

`

export const CartList = styled.ul`
max-height: 400px;
display: flex;
flex-direction: column;
background: var(--background);
padding: 5px;
overflow-y: scroll;
::-webkit-scrollbar {
  width: 10px;}
::-webkit-scrollbar-thumb {
  background: var(--background-alt); 
}
::-webkit-scrollbar-thumb:hover {
  background: #555; 
}

p{
    text-align: center;

}

@media (max-width: 500px) {
  font-size: 10px;

}
@media (max-width: 400px) {
  font-size: 8px;
}

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

@media (max-width: 400px) {
  width: 90px;
  height: 45px;
}
`