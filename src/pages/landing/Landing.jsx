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
  width: 100%;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 0;
  height: 100%;
  justify-content: center;
  align-items: center;
  z-index: 0;
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