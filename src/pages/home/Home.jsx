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
      <TopBar>
        <Logo src="/source/logoWithName.png" alt="Logo" />
        <DotoriSection>
          <DotoriImage src="/source/singleDotori.png" alt="Single Dotori" />
          <DotoriCount>25</DotoriCount>
        </DotoriSection>
      </TopBar>
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

// TopBar styles for the fixed top bar
const TopBar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 90%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  //background-color: #ffffff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 10;
`;

const Logo = styled.img`
  height: 30px;
`;

const DotoriSection = styled.div`
  display: flex;
  align-items: center;
`;

const DotoriImage = styled.img`
  height: 20px;
  margin-right: 5px;
`;

const DotoriCount = styled.span`
  font-size: 16px;
  color: #333;
`;

// Rest of your components
const BackgroundWrapper = styled.div`
  width: 100vw;
  margin-top: 470vh;
  height: calc(100vw * 12.92);
  background-image: url("/source/background.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top center;
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
  width: 52%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16.1vh;
  position: absolute;
  top: 17%;
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
  top: 93.5%;
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
  width: 80%;
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
