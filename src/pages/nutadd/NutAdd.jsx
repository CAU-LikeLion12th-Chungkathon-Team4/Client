// 도토리 선물하기
import React, { useState } from "react";
import styled from "styled-components";
import SquBox from "../../component/join/SquBox";
import DefaultButton from "../../component/DefaultButton";
import InputNick from "../../component/join/InputNick";
import MakePhotoBox from "../../component/nutAdd/MakePhotoBox";
import MakeMessageBox from "../../component/nutAdd/MakeMessageBox";
import MakeQuiz from "../../component/nutAdd/MakeQuiz";

const NutAdd = () => {
  const [step, setStep] = useState(1);

  const handleStep = () => {
    setStep(step + 1);
  };

  const handleSubmit = async () => {
    console.log();
  };

  return (
    <Container>
      <BackgroundWrapper>
        <BackgroundImage src="/source/joinBackground.png" alt="Background" />
      </BackgroundWrapper>
      <Content>
        <Title>도토리 선물하기</Title>
        {step === 1 && (
          <>
            <MakePhotoBox />
            <DefaultButton buttonText="다음" buttonFunc={handleStep} />
          </>
        )}
        {step === 2 && (
          <>
            <MakeMessageBox />
            <DefaultButton buttonText="다음" buttonFunc={handleStep} />
          </>
        )}
        {step === 3 && (
          <>
            <MakeQuiz />
            <DefaultButton buttonText="마치기" buttonFunc={handleSubmit} />
          </>
        )}
      </Content>
    </Container>
  );
};

export default NutAdd;

const Container = styled.div`
  //미디어 쿼리 적용 - 여기가 최상단. 하위 컴포넌트는 여기 값을 기준으로 %단위로 지정해서 비율 유지 가능
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

const BackgroundImage = styled.img`
  width: 100%;
  height: 100%;
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

const Title = styled.div`
  font-size: 44px;
  color: #823b09;
  font-family: "EF_jejudoldam";
  //margin-bottom:8%;
`;
