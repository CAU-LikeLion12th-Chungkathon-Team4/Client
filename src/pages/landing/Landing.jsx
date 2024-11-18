//랜딩페이지
import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Landing = () => {
  const navigate = useNavigate();
  const gologin = () => {
    navigate('/login');
  } 

return (
  <Container >
    <BackgroundWrapper>
      <BackgroundImage src="/source/loginImg.png" alt="Background" />
      </BackgroundWrapper>
      <Content>
      <LoginBtn onClick={gologin}>로그인</LoginBtn>
      </Content>
  </Container>
);
};

export default Landing;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  overflow-y: hidden;
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

const BackgroundWrapper = styled.div`
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

const Content = styled.div`
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
  z-index: 1;
  flex-direction: column;
  gap: 3%;

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
  width: 230px;
  height: 45px;
  border-radius: 10px;
  padding: 10px;
  background: #823B09;
  border: none;
  cursor: pointer;
  position: absolute;
  bottom: 17%;
  z-index: 1;
  color: #FFF;
  font-size: 18px;
  font-weight: 400;
  font-family: BMJUA;
`;