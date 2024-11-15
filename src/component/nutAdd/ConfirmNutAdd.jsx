import React, { useEffect, useState } from "react";
import styled from "styled-components";
import DefaultButton from "../DefaultButton";

const ConfirmNutAdd = ({ goJoin }) => {

    
  return (
    <Outer>
      <Container>
        <Title>| STEP 4 |</Title>
        <TextTop>도토리가 저장되었습니다!</TextTop>
        <TextMiddle>상대방이 퀴즈를 맞히면</TextMiddle>
        <TextMiddle>사진과 메시지를 읽어볼 수 있습니다.</TextMiddle>
        <SubText>나도 다람쥐 만들고 도토리 모으러 갈래!!</SubText>
        <DefaultButton buttonText="회원가입 하러 가기" buttonFunc={goJoin} />
      </Container>
    </Outer>
  );
};

export default ConfirmNutAdd;

const Outer = styled.div`
  width: 91.4668%;
  height: 55.9113%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 20px;
  background-color: rgba(255, 255, 255, 0.85);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

const Title = styled.div`
  color: #823b09;
  font-size: 150%;
  margin-top: 4%;
`;
const TextTop = styled.div`
  font-size: 110%;
`;
const TextMiddle = styled.div`
  font-size: 110%;
`;

const SubText = styled.div`
  font-size: 14px;
  color: #737373;
  width: 100%;
  display: flex;
  justify-content: center;
`;
