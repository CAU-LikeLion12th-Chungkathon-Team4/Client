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
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Container>
      <BackgroundWrapper>
        <Content>
          <LockImagesWrapper>
            {[...Array(23)].map((_, index) => (
              <LockImage
                key={index}
                src="/source/lock.png"
                alt="Lock"
                align={index % 2 === 0 ? 'left' : 'right'}
              />
            ))}
          </LockImagesWrapper>
          <BottomSection>
            <Title>람쥐람쥐이름이이렇게님의 나무</Title>
            <Under>
              <SquirrelImage src="/source/squirrel/1.png" alt="Squirrel" />
              <RightSection>
                <AcornText>추억 도토리가 25개 쌓이는 중이에요!</AcornText>
                <GiftButton>도토리 선물하기</GiftButton>
              </RightSection>
            </Under>
          </BottomSection>
        </Content>
      </BackgroundWrapper>
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
`;

const BackgroundWrapper = styled.div`
  width: 100vw;
  //min-height: 100vh;
  margin-top: 470vh;
  height: calc(100vw * 12.92); /* 317:4096 비율을 유지 */
  background-image: url("/source/background.png");
  background-size: cover; /* 화면에 맞게 전체 이미지 표시 */
  background-repeat: no-repeat;
  background-position: top center; /* 이미지의 위쪽을 기준으로 정렬 */
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 0;

  @media (min-width: 440px) {
    width: 440px;
    height: calc(440px * 12.92);
  }

  @media (max-width: 375px) {
    width: 375px;
    height: calc(375px * 12.92);
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 1;
  width: 100%;
  height: 100%;
`;

const LockImagesWrapper = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8vh;
  position: absolute;
  top: 26.67%; /* 배경 높이의 2/3 지점 */
  z-index: 1;
`;

const LockImage = styled.img`
  width: 8vw;
  height: auto;
  align-self: ${(props) => (props.align === 'left' ? 'flex-start' : 'flex-end')};
  margin-left: ${(props) => (props.align === 'left' ? '5vw' : '0')};
  margin-right: ${(props) => (props.align === 'right' ? '5vw' : '0')};
`;

const BottomSection = styled.div`
  align-items: center;
  justify-content: space-between;
  position: absolute;
  top: 80%; /* 배경 높이의 4/5 지점 */
  width: 90%;
  z-index: 1;
`;

const Title = styled.h1`
  font-size: 18px;
  font-weight: bold;
  color: #4a4a4a;
  margin-bottom: 10px;
`;

const Under = styled.div`
  display: flex;
`;

const SquirrelImage = styled.img`
  width: 80px;
  height: auto;
  margin-right: 10px;
`;

const RightSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const AcornText = styled.p`
  font-size: 14px;
  color: #333;
  margin: 0;
  margin-bottom: 8px;
`;

const GiftButton = styled.button`
  font-size: 14px;
  color: white;
  background-color: #f9a825;
  border: none;
  padding: 8px 12px;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #c78919;
  }
`;
