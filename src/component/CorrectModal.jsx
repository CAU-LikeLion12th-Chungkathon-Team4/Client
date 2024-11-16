import React from 'react'
import styled from 'styled-components';

const CorrectModal = () => {
  return (
        <Modal>
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path d="M13 1L1 13M1 1L13 13" stroke="#737373" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
          <TextBox>정답이에요! 나무에서 친구가 보낸 도토리를 확인해 보세요.</TextBox>
        </Modal>
      )
}

export default CorrectModal


const Modal = styled.div`
display: flex;
width: 341px;
//height: 223px;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 9px;
border-radius: 20px;
background: #FFF;
box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.12);
h1{
    color: #000;
text-align: center;

/* text/head 2 */
font-family: "BM JUA_TTF";
font-size: 20px;
font-style: normal;
font-weight: 400;
line-height: 150%; /* 30px */
text-align: center;
justify-content: center;
}
`;

const TextBox = styled.div`
display: flex;
padding-bottom: 10px;
justify-content: center;
align-items: center;
gap: 5px;
width: 70%;
`;