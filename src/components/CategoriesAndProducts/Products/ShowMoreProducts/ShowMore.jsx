import React from 'react'
import { useSelector } from 'react-redux'
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

button:disabled{
  cursor: not-allowed;
  :hover{ background: var(--secondary);
    color: black;
  }
}

button:hover{
    background: var(--background);
    color: var(--secondary);
}

`


const ShowMore = ({Limit, setLimit}) => {

  const total = useSelector(state => state.products.total)


  return (
    <ShowMoreContainer>
        <button disabled={Limit >= total}  onClick={() => setLimit(prevLimit => prevLimit + 6)}>VER MÁS</button>
        <button disabled={Limit == 6} onClick={() => setLimit(prevLimit => prevLimit - 6)}>VER MENOS</button>
    </ShowMoreContainer>
  )
}

export default ShowMore