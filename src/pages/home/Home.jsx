// Home.jsx
import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Home = () => {
  const [scrollControl, setScrollControl] = useState(0);

  useEffect(() => {
    window.scrollTo({
      top: 5000,
      behavior: "smooth",
    });
  }, [scrollControl]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setScrollControl(1);
    }, 10);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Container>
      <BackgroundWrapper>
        <BackgroundImage src="/source/wallpaper.png" alt="Background" />
      </BackgroundWrapper>
      <Content>
        <Nuts top="220px" left="160px">도토리1</Nuts>
        <Nuts top="150px" left="160px">도토리2</Nuts>
      </Content>
    </Container>
  );
};

export default Home;

const Container = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
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


`;

const BackgroundWrapper = styled.div`
  position: absolute;
  top: 0;
  width: 100vw;
  overflow-x: hidden;
  height: auto;
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
`;

const BackgroundImage = styled.img`
  width: 100%;
  height: auto;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: 375px;
  height: 100vh;
`;

const Nuts = styled.div`
  position: absolute;
  width: 50px; //크기 고정
  height: 30px; //크기 고정
  top: ${(props) => props.top}; /* 위치 조정을 위한 props */
  left: ${(props) => props.left}; /* 위치 조정을 위한 props */
  border: 2px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  background-color: white;
`;