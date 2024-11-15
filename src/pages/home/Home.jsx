import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const dummy = {
  email: 'kimdaram@daram.com',
  nickname: '김다람',
  profile: 'source/daram1.png',
  nutCount: '25',
  identifyUser: 0,
};

// 임시 데이터 배열
const dummyData = Array.from({ length: 21 }, (_, index) => ({
  id: index,
  isLock: index % 2 === 0, // 짝수는 잠김, 홀수는 잠기지 않음
  sender: '친구친구친구',
}));

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

    // 이미지 클릭 핸들러
    const handleImageClick = (isLock, id) => {
      if (isLock) {
        //navigate(`/photo/${id}`);
      } else {
        //navigate(`/quiz/${id}`);
      }
    };

  return (
    <Container>
      <TopBar>
        <Logo src="/source/logoWithName.png" alt="Logo" />
        <DotoriSection>
          <DotoriImage src="/source/singleDotori.png" alt="Single Dotori" />
          <DotoriCount>{dummy.nutCount}</DotoriCount>
        </DotoriSection>
      </TopBar>
      <BackgroundWrapper>
        <Content>
        <LockImagesWrapper>
          {dummyData
            .slice() // 원본 배열 수정 방지
            .reverse() // 배열 순서 뒤집기
            .map(({ id, isLock, sender }) => (
              <LockItem key={id} align={id % 2 === 0 ? "left" : "right"}>
                <LockImage
                  src={isLock ? "/source/dotoriPocket.png" : "/source/lock.png"}
                  alt={isLock ? "Nut" : "Lock"}
                  onClick={() => handleImageClick(isLock, id)}
                />
                <SenderName>{sender}</SenderName>
              </LockItem>
            ))}
        </LockImagesWrapper>
          <BottomSection>
            <Title><span>{dummy.nickname}</span> 님의 나무</Title>
            <BoxWrapper>
              <SquirrelImage src="/source/squirrel/2.png" alt="Squirrel" />
              <RightSection>
                <AcornText>추억 도토리가 <span>{dummy.nutCount}</span>개<br />쌓이는 중이에요!</AcornText>
                <GiftButton>
                  {dummy.identifyUser === 0 ? "도토리 선물하기" : "도토리 요청하기"}
                </GiftButton>
              </RightSection>
            </BoxWrapper>
          </BottomSection>
        </Content>
      </BackgroundWrapper>
    </Container>
  );
};

export default Home;

// Styled Components
const Container = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  justify-content: center;
  align-items: center;
`;

const TopBar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 10;
`;

const Logo = styled.img`
  height: 30px;
`;

const DotoriSection = styled.div`
  display: flex;
  align-items: center;
  padding-right: 40px;
`;

const DotoriImage = styled.img`
  height: 20px;
  margin-right: 5px;
`;

const DotoriCount = styled.span`
  font-size: 16px;
  color: #333;
`;

const BackgroundWrapper = styled.div`
  width: 100vw;
  margin-top: 470vh;
  height: calc(100vw * 12.92);
  background-image: url("/source/fullTree.png");
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
  width: 56%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 7.1vh;
  position: absolute;
  bottom: 6.5%; /* 배경 높이의 2/3 지점 */
  z-index: 1;
`;

const LockItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: ${(props) => (props.align === "left" ? "flex-start" : "flex-end")};
  width: 100%;
  margin-left: ${(props) => (props.align === "left" ? "5vw" : "0")};
  margin-right: ${(props) => (props.align === "right" ? "5vw" : "0")};
`;

const LockImage = styled.img`
  width: 20vw;
  height: auto;
  cursor: pointer;
`;

const SenderName = styled.span`
  font-size: 18px;
  margin-top: 8px;
  color: white;
  text-align: center;
  word-break: break-word;
`;

const BottomSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 93.2%;
  width: 80%;
  z-index: 1;
`;

const Title = styled.h1`
  font-size: 30px;
  font-weight: bold;
  color: black;
  white-space: nowrap;
  text-align: right;
  margin-bottom: 10px;
  align-self: flex-end;
  margin-right: -5%;
  span {
    color: #823B09; /* 강조 부분 색상 */
  }
`;

const BoxWrapper = styled.div`
  display: flex;
  align-items: center;
  //justify-content: center;
  margin-right: 10%;
  width: 100%;
`;

const SquirrelImage = styled.img`
  width: 90%;
  height: auto;
  //margin-right: 10px;
  margin-left: -10%;
`;

const RightSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const AcornText = styled.p`
  font-size: 18px;
  font-weight: bold;
  text-align: right;
  color: black;
  margin: 0;
  margin-bottom: 30%;
  margin-right: 20%;
  line-height: 26px;
  white-space: nowrap;
  span {
    color: #823B09; /* 강조 부분 색상 */
  }
`;

const GiftButton = styled.button`
  font-size: 18px;
  color: white;
  background-color: #823B09;
  border: none;
  margin-right: 20%;
  margin-bottom: 110%;
  padding: 12% 25%;
  border-radius: 10px;
  white-space: nowrap;
  cursor: pointer;
  font-family: inherit;
  &:hover {
    background-color: #5d2b06;
  }
`;
