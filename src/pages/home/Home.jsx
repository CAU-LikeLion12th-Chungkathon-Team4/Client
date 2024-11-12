// Home.jsx
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const Home = () => {
  // 페이지 렌더링시 변수 변하게 해서 useEffect로 스크롤바 최하단으로 보내기 위한 로직
  const [scrollControl, setScrollControl] = useState(0);

  useEffect(() => {
    window.scrollTo({
      top:5000,
      behavior:'smooth'
    });
  }, [scrollControl]);

  // 페이지 렌더링 후 곧바로 변수 바꾸는 함수 - 타이머로 10밀리초 뒤에 실행
  useEffect(() => {
    const timer = setTimeout(() => {
      setScrollControl(1);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Container >
      {/* 배경이미지 넣기 위한 rapper */}
      <BackgroundWrapper>
        <BackgroundImage src="/source/testImg.png" alt="Background" />
      </BackgroundWrapper>
      {/* Content 안의 요소들은 배경이미지 위에 렌더링. z-index를 1로 설정 */}
      <Content>
        <div>test</div>
      </Content>
    </Container>
  );
};

export default Home;

const Container = styled.div`
  width: 375px;
  display: flex;
  flex-direction: column;
`;

const BackgroundWrapper = styled.div`
  position: absolute;
  top:0;
  width: 375px;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 0;
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
  z-index: 1;
`;