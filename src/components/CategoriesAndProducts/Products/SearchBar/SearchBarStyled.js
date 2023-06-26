import styled from "styled-components"

export const SearchBarContainerStyled = styled.div`

height: 40px;
width: 100%;
max-width: 800px;
display: flex;
padding: 5px;
background: var(--background);
border-radius: 10px 10px 10px 10px;

`

export const SearchBarStyled = styled.input`

width: 90%;
border: 1px var(--background) solid;
padding: 0 5px;
background: var(--background-alt);
color: white;
outline: none;

:-moz-placeholder{
    color: var(--primary)
}
`

export const SearchButton = styled.button `
cursor: pointer;
font-size: 20px;
width: 10%;
background: var(--background);
color: var(--primary);
border: none;

`