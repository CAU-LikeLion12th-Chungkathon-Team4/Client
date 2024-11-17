import React from 'react'
import styled from 'styled-components';
import CancelButton from './CancelButton';

const WrongModal = () => {
  return (
        <Modal>
          <CancelButton/>
          <TextBox>추억을 잠깐 잊으셨군요! ㅠㅠ<br/>친구에게 도토리를 다시 한 번<br/>요청할까요?</TextBox>
          <Button>도토리 요청하기</Button>
        </Modal>
      )
}

export default WrongModal


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
  padding-bottom: 20px;
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
  position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -60%);
    z-index: 3;
`;

const TextBox = styled.div`
display: flex;
padding-bottom: 10px;
justify-content: center;
align-items: center;
gap: 5px;
width: 70%;
display: flex;

  color: #000;
  text-align: center;

  /* text/head 2 */
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 30px */
`;

const Button = styled.button`
display: flex;
width: 153px;
height: 45px;
padding: 10px;
justify-content: center;
align-items: center;
gap: 10px;
border-radius: 10px;
border: 2px solid var(--white, #FFF);
background: var(--main, #823B09);
color: var(--white, #FFF);
font-family: "BM JUA_TTF";
font-size: 18px;
font-style: normal;
font-weight: 400;
line-height: normal;
`;