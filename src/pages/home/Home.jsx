// Home.jsx
import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { loginHandler } from '../../api/api_login';

const Home = () => {
  const [scrollControl, setScrollControl] = useState(0);

  useEffect(() => {
    window.scrollTo({
      top:5000,
      behavior:'smooth'
    });
  }, [scrollControl]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setScrollControl(1);
    }, 10);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Container >
      <BackgroundWrapper>
        <BackgroundImage src="/source/testImg.png" alt="Background" />
      </BackgroundWrapper>
      <Content>
        <button onClick={loginHandler}>login</button>
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