import styled from "styled-components";

export const CategoriesContainerStyled = styled.div`
width: 350px;
height: 600px;
background: var(--background-alt);
border-radius: 10px;
display: flex;
flex-direction: column;
padding: 20px 30px;
gap: 20px;
justify-content: center;


@media (max-width: 400px) {
    width: 300px;
}


`


export const CategoriesStyled = styled.button`

cursor: pointer;
width: 100%;
font-size: 25px;
font-weight: 600;
color: var(--primary);
background:var(--background-alt);
border: none;
display: flex;
padding: 0 10px;

&:hover{
    box-shadow: inset 15em 0 0 0 var(--secondary);
    transition: 1s;
}

&:focus{
    color: var(--background);
    background: var(--secondary);
}

`


