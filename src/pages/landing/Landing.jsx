//랜딩페이지
import React from "react";
import { loginHandler } from "../../api/api_login";
import styled from "styled-components";

const Landing = () => {
  
return (
  <Container >
      <BackgroundImage src="/source/loginImg.png" alt="Background" />
      <Img src="/source/googleBtn.png" alt="구글 로그인" onClick={loginHandler} />
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

const Img = styled.img`
  width: 60%;
  cursor: pointer;
  position: absolute;
  bottom: 5%;
  z-index: 1;
`;