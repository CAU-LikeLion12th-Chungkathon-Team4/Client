// 닉네임 설정 창
import React, { useState } from "react";
import styled from "styled-components";

const InputNick = ({ setSelectedNick }) => {
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
        <Title>| STEP 3 |</Title>
        <Text>닉네임을 설정해 주세요.</Text>
        <InputBox
          type="text"
          value={currentNick}
          onChange={handleChange}
          placeholder="EX) 도토리맛있다람쥐"
        />
        <SubText>닉네임은 10글자 이내로만 설정 가능해요.</SubText>
      </Container>
    </Outer>
  );
};

export default InputNick;

const Outer = styled.div`
  width: 91.4668%;
  height: 55.9113%;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
`

const Container = styled.div`
  width: 100%;
  height: 40.32%;
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

const InputBox = styled.input`
  width: 60.53%;
  height: 23.28%;
  font-size: 110%;
  padding-left: 4%;
  border-radius: 10px;
  text-align: left;
  background-color: #e5e5e5;
  color: #a3a3a3;
  border:none;
  font-family: 'BMJUA', sans-serif;
  &::placeholder {
    color: #a3a3a3;
  }
`;

const SubText = styled.div`
  font-size: 70%;
  color: #737373;
  margin-top: -3%;
  margin-bottom: 3%;
  width:60.53%;
`;