import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components';

const LogoutModal = () => {
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const navigate = useNavigate();
  const gomypage = () => {
    window.location.href = `/mypage/${localStorage.getItem("urlRnd")}`;
  }

  const logoutHandler = () => {
    localStorage.clear();
    navigate(`/`);
  }

  return (
    <ModalContainer>
      <ModalWrapper>
        <Buttons>
          <Button onClick={gomypage}>내 정보</Button>
          <Button onClick={logoutHandler}>로그아웃</Button>
        </Buttons>
      </ModalWrapper>
    </ModalContainer>
  )
}

export default LogoutModal

const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  display: flex;
  width: 335px;
  padding: 20px;
  align-items: center;
  gap: 9px;
  border-radius: 20px;
  background: #FFF;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.12);
  `;

  const Button = styled.button`
  border: none;
  display: flex;
  width: 213px;
  height: 45px;
  padding: 10px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 10px;
  border: 2px solid var(--main, #823B09);
  background: var(--white, #FFF);
  color: var(--main, #823B09);
font-family: BMJUA;
font-size: 18px;
font-style: normal;
font-weight: 400;
line-height: normal;
  cursor: pointer;
  &:hover {
    background: #FEF4E8;
  }
  `;

const ModalContainer = styled.div`
  //미디어 쿼리 적용 - 여기가 최상단. 하위 컴포넌트는 여기 값을 기준으로 %단위로 지정해서 비율 유지 가능
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  overflow-y: hidden;
  justify-content: center;
  align-items: center;
  background: rgba(38, 38, 38, 0.48);
  backdrop-filter: blur(2px);
  z-index: 100;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  // 375-440까지는 화면 비율에 맞춰서 변경. 이외 범위는 최소 최대 범위로 고정
  @media (min-width: 440px) {
    // 화면너비가 440px 이상일 때 고정 // iphone 16 pro max
    width: 440px;
  }

  @media (max-width: 375px) {
    // 화면너비가 375px 이하일 때 고정 // iphone 13 mini
    width: 375px;
  }

  @media (min-height: 956px) {
    // 화면높이가 956px 이상일 때 고정 // iphone 16 pro max
    height: 956px;
  }

  @media (max-height: 812px) {
    // 화면높이가 812px 이하일 때 고정 // iphone 13 mini
    height: 812px;
  }
`;

const ModalWrapper = styled.div`
  position: absolute;
  top: 0;
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
  overflow-y: hidden;
  //height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 0;

  // 375-440까지는 화면 비율에 맞춰서 변경. 이외 범위는 최소 최대 범위로 고정
  @media (min-width: 440px) {
    // 화면너비가 440px 이상일 때 고정 // iphone 16 pro max
    width: 440px;
  }

  @media (max-width: 375px) {
    // 화면너비가 375px 이하일 때 고정 // iphone 13 mini
    width: 375px;
  }

  @media (min-height: 956px) {
    // 화면높이가 956px 이상일 때 고정 // iphone 16 pro max
    height: 956px;
  }

  @media (max-height: 812px) {
    // 화면높이가 812px 이하일 때 고정 // iphone 13 mini
    height: 812px;
  }
`;
