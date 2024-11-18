import React from 'react'
import styled from 'styled-components'

const CancelButton = ({ onClick }) => {
  return (
    <Wrapper>
        <Button onClick={onClick}>
        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="14" viewBox="0 0 15 14" fill="none">
        <path d="M13.5 1L1.5 13M1.5 1L13.5 13" stroke="#737373" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    </Button>
    </Wrapper>
  )
}

export default CancelButton

const Wrapper = styled.div`
    display: flex;
width: 100%;
padding-right: 50px;
padding-top: 20px;
height: auto;
justify-content: right;
align-items: right;
`;

const Button = styled.div`
`;