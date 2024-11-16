// 도토리 추가 마지막 확인 창
import React from "react";
import styled from "styled-components";

const ConfirmNutAdd = ({ goJoin }) => {
  return (
    <Outer>
      <Container>
        <Line>
          <TextTop><HighlightText>도토리</HighlightText>가 저장되었습니다!</TextTop>
        </Line>
        <Line>
          <TextMiddle>상대방이 퀴즈를 맞히면</TextMiddle>
          <TextMiddle>사진과 메시지를 읽어볼 수 있습니다.</TextMiddle>
        </Line>
        <Line>
          <SubText>나도 다람쥐 만들고 도토리 모으러 갈래!!</SubText>
        </Line>
        <GoJoinButton onClick={goJoin}>회원가입 하러 가기</GoJoinButton>
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
  height: 70%;
  border-radius: 20px;
  background-color: rgba(255, 255, 255, 0.85);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;
const TextTop = styled.div`
  font-size: 160%;
`;
const TextMiddle = styled.div`
  font-size: 110%;
  margin-bottom:2%;
`;

const SubText = styled.div`
  font-size: 100%;
  color: #737373;
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom:-23%;
`;

const Line = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
`

const GoJoinButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 55.8%;
  height: 14.33%;
  background-color: #823b09;
  color: white;
  font-size: 18px;
  border-radius: 10px;
  cursor:pointer;
`;

const HighlightText = styled.span`
  color: #823b06;
`;