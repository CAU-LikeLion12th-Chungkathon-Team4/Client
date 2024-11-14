import React, { useEffect, useState } from "react";
import styled from "styled-components";
import DefaultButton from "../DefaultButton";

const MakeQuiz = ({setSelectedNick}) => {
    const [currentNick, setCurrentNick] = useState("");

  const handleChange = (e) => {
    const newNick = e.target.value;
    if (newNick.length <= 10) {
      setCurrentNick(newNick);
      setSelectedNick(newNick);
    } else {
      alert("닉네임은 10글자 이내로만 설정 가능해요.");
    }
  };

  return (
    <Outer>
      <Container>
        <Title>| STEP 2 |</Title>
        <TextBox>
          <Text>닉네임과 함께 전하고 싶은</Text>
          <Text>메서지를 입력해주세요. (80자 이내)</Text>
        </TextBox>
        <NickBox>
          <InputBox
            type="text"
            value={currentNick}
            onChange={handleChange}
            placeholder="EX) 도토리맛있다람쥐"
          />
          <SubText>닉네임은 10글자 이내로만 설정 가능해요.</SubText>
        </NickBox>

        <SubText>사진 파일 업로드는 한 번에 7장까지 가능해요</SubText>
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
  height: 87.44%;
  border-radius: 20px;
  background-color: rgba(255, 255, 255, 0.85);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 9%;
`;

const Title = styled.div`
  color: #823b09;
  font-size: 150%;
`;
const Text = styled.div`
  font-size: 110%;
`;

const SubText = styled.div`
  font-size: 70%;
  color: #737373;
  margin-top: -3%;
  margin-bottom: 3%;
  width: 60.53%;
`;
const InputBox = styled.input`
  width: 60.53%;
  height: 23.28%;
  font-size: 120%;
  padding-left: 4%;
  border-radius: 10px;
  text-align: left;
  background-color: #e5e5e5;
  color: #a3a3a3;
  border: none;
  font-family: "BMJUA", sans-serif;
  &::placeholder {
    color: #a3a3a3;
  }
`;

const TextBox = styled.div`
    
`
const NickBox = styled.div`
    
`