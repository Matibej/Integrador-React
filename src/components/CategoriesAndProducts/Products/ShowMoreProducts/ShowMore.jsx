import React from 'react'
import styled from 'styled-components'

const ShowMoreContainer = styled.div`

display: flex;
justify-content: center;
gap: 10px;

button{
    cursor: pointer;
    height: 40px;
    width: 120px;
    border-radius: 10px;
    opacity: 0.9;
    background: var(--secondary);
    color: black;
    border: 2px solid var(--background);
    box-shadow: 0 0 1px black;
    font-weight: 600;
    padding: 5px;
}

button:hover{
    background: var(--background);
    color: var(--secondary);
}

`


const ShowMore = () => {
  return (
    <ShowMoreContainer>
        <button>VER MÁS</button>
        <button>VER MENOS</button>
    </ShowMoreContainer>
  )
}

export default ShowMore