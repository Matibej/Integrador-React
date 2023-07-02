import styled from "styled-components"

export const DiscountedGameContainer = styled.section `
max-width: 1400px;
box-sizing: border-box;
width: 85%;
height: 290px;
background: var(--background);
opacity: 0.9;
display: flex;
border-radius: 10px;
align-items: center;
justify-content: space-between;
flex-wrap: wrap;
box-shadow: 0 0 5px black;





@media (max-width: 950px) {

height: auto;
flex-direction: column;

img{
    width: 100%;
    height: 300px;
}
    
}




`

export const DiscountedGameImg = styled.div`
    height: 100%;
    width: 50%;
    border-radius: 10px 0 0 10px;

@media (max-width: 950px) {
    width: 100%;
    height: 300px;
    border-radius: 10px 10px 0 0;
}

@media (max-width: 650px) {

    height: 250px;
}

@media (max-width: 600px) {

    height: 180px;

}

@media (max-width: 400px) {

height: 140px;

}

`


export const DiscountedGameInfo = styled.div`
display:flex;
flex-direction: column;
height: 100%;
width: 50%;
padding: 20px 0px;
justify-content: space-between;


@media (max-width: 950px) {

width: 100%
    
}

@media (max-width: 700px) {
    
padding: 10px 0 20px 0
    
}


`

export const DiscountedGameTitle = styled.div`
padding: 5px 30px;
width: 100%;
display: flex;
flex-direction: column;
gap: 30px;
color: var(--tertiary);
font-size: 35px;


h2{
    font-size: 35px;
    color: white
}


@media (max-width: 700px) {
padding: 5px;
font-size: 25px;
gap: 5px;

h2{
    font-size: 25px;
}
    
}

`


export const DiscountedGamePriceContainer = styled.div`
display: flex;
width: 100%;
justify-content: space-between;
font-size: 35px;
align-items: center;
padding: 0 20px;

button{
    height: 50px;
}


@media (max-width: 500px) {

padding: 0 5px;    

button{
height: 40px;
width: 75px;
font-size: 15px;
}}


`

export const SaleContainer = styled.div`

 display: flex;
 align-items: center;
 width: 100%;
 justify-content: space-between;
 padding: 0 10px; 

small{
    font-size: 20px;
    text-decoration: line-through;
    color: darkgray;
}

span{
    font-size: 30px;
}

@media (max-width: 650px) {


span{
    font-size: 20px;
}

small{
    font-size: 15px;
}
    
}

`
export const Sale = styled.span`

color: var(--background);
font-size: 25px;
height: 40%;
background-color: var(--tertiary);
padding: 5px;
font-weight: 600;

`

export const PriceContainer = styled.div`

display: flex;
flex-direction: column;
color: white;


`