// Home.jsx
import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

const Home = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    // 페이지 로드 시 스크롤을 아래로 설정
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, []);

  return (
    <Container ref={containerRef}>
      <Image src="/source/testImg.png" alt="Scroll Image" />
    </Container>
  );
};

export default Home;

const Container = styled.div`
  width: 100%;
  overflow-y: scroll;
  display: flex;
  justify-content: center;
  flex-direction: column-reverse;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  object-fit: contain;
`;