import React from 'react'
import styled from 'styled-components';
import CancelButton from './CancelButton';

const CorrectModal = ({ onClose }) => {
  return (
        <Modal>
          <CancelButton onClick={onClose}/>
          <TextBox>정답이에요!<br/>나무에서 친구가 보낸 도토리를<br/>확인해 보세요.</TextBox>
        </Modal>
      )
}

export default CorrectModal


const Modal = styled.div`
  display: flex;
  width: 341px;
  height: auto;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 9px;
  border-radius: 20px;
  padding-bottom: 20px;
  background: #FFF;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.12);
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
  color: #000;
  text-align: center;

  /* text/head 2 */
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 30px */
`;