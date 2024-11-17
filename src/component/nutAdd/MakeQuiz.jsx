// 도토리 퀴즈 만들기

import React, { useState } from "react";
import styled from "styled-components";

const MakeQuiz = ({ setQuizAns, setQuizText }) => {
  const [curQuizAns, setCurQuizAns] = useState(undefined);

  const handleChangeQuizText = (e) => {
    const newQuizText = e.target.value;
    if (newQuizText.length <= 40) {
      setQuizText(newQuizText);
    }
  };

  const handleOXClick = (answer) => {
    setCurQuizAns(answer);
    setQuizAns(answer);
  };

  return (
    <Outer>
      <Container>
        <Title>| STEP 3 |</Title>
        <TextBox>
          <Text>추억 퀴즈를 만들어 주세요. (40자 이내)</Text>
        </TextBox>
        <QuizTextBox>
          <InputBox2
            maxLength={40}
            type="text"
            //value={currentNick}
            onChange={handleChangeQuizText}
            placeholder="EX) 우리가 처음 만난 날은 2월 28일 일까??? "
          />
        </QuizTextBox>
        <QuizBox>
          <SubText>퀴즈의 정답을 선택해 주세요.</SubText>
          <Line>
            <OX
              selected={curQuizAns === true}
              onClick={() => handleOXClick(true)}
            >
              O
            </OX>
            <OX
              selected={curQuizAns === false}
              onClick={() => handleOXClick(false)}
            >
              X
            </OX>
          </Line>
        </QuizBox>
      </Container>
    </Outer>
  );
};

export default MakeQuiz;

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
const Text = styled.div`
  font-size: 110%;
`;

const SubText = styled.div`
  font-size: 14px;
  color: #737373;
  width: 100%;
  display: flex;
  justify-content: center;
`;

const InputBox2 = styled.textarea`
  width: 60%;
  height: 90%;
  font-size: 110%;
  padding-top: 5%;
  padding-left: 3%;
  padding-right: 3%;
  border-radius: 10px;
  text-align: left;
  background-color: #e5e5e5;
  color: #a3a3a3;
  border: none;
  resize: none;
  overflow-wrap: break-word;
  overflow-x: hidden;
  font-family: "BMJUA", sans-serif;
  line-height: 1.5;
  &::placeholder {
    color: #a3a3a3;
  }
`;

const TextBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 10%;
  gap: 13%;
`;
const QuizTextBox = styled.div`
  width: 100%;
  height: 25%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const QuizBox = styled.div`
  width: 100%; //375px
  height: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Line = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const OX = styled.div`
  width: 35%;
  height: 73%;
  background-color: ${({ selected }) => (selected ? "#823b09" : "white")};
  color: ${({ selected }) => (selected ? "white" : "#823b09")};
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  font-size: 100px;
  font-weight: 100;
  cursor: pointer;
`;
