//랜딩페이지
import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Landing = () => {
  const navigate = useNavigate();
  const gologin = () => {
    navigate('/login');
  } 
  const goPresent = () => {
    navigate('/gift');
  }
return (
  <Container >
      <BackgroundImage src="/source/loginImg.png" alt="Background" />
      <LoginBtn onClick={gologin}>로그인</LoginBtn>
      <PresentBtn onClick={goPresent}>도토리 선물하기</PresentBtn>
  </Container>
);
};

export default Landing;

const Container = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
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

const BackgroundImage = styled.img`
  width: 100%;
  height: auto;
`;

const LoginBtn = styled.button`
  width: 220px;
  height: 45px;
  border-radius: 10px;
  padding: 10px;
  background: #823B09;
  border: none;
  cursor: pointer;
  position: absolute;
  bottom: 18.3%;
  z-index: 1;
  color: #FFF;
  font-size: 18px;
//  font-weight: 400;
`;

const PresentBtn = styled.button`
  width: 220px;
  height: 45px;
  border-radius: 10px;
  padding: 10px;
  border: 2px solid var(--main, #823B09);
  background: #FEF4E8;
  cursor: pointer;
  position: absolute;
  bottom: 12%;
  z-index: 1;
  color: var(--main, #823B09);
  font-size: 18px;
//  font-weight: 400;
`;