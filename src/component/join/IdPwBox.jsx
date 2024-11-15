import React, { useEffect, useState } from "react";
import styled from "styled-components";
import DefaultButton from "../DefaultButton";

const IdPwBox = ({ setSelectedID, setSelectedPW, setIsConfirmID }) => {
  const [currentID, setCurrentID] = useState();
  const [currentPW, setCurrentPW] = useState();
  const [currentConfirmID, setCurrentConfirmID] = useState(false);

  const handleChangeID = (e) => {
    const newID = e.target.value;
    if (newID.length <= 12) {
      setCurrentID(newID);
      setSelectedID(newID);
      setIsConfirmID(false);
      setCurrentConfirmID(false);
    } else {
      alert("아이디는 12글자 이내로만 설정 가능해요.");
    }
  };
  const handleChangePW = (e) => {
    const newPW = e.target.value;
    if (newPW.length <= 12) {
      setCurrentPW(newPW);
      setSelectedPW(newPW);
    } else {
      alert("비밀번호는 12글자 이내로만 설정 가능해요.");
    }
  };

  const handleConfirmID = async () => {
    //백 api로 확인
    if(!currentID){
        alert("아이디를 입력해 주세요!!")
    }else{
        setIsConfirmID(true);
        setCurrentConfirmID(true);
    }
    
  };

  return (
    <Outer>
      <Container>
        <Title>| STEP 1 |</Title>
        <Text1>아이디를 입력해주세요.</Text1>
        <Line>
          <InputBox2
            type="text"
            value={currentID}
            onChange={handleChangeID}
            placeholder="EX) Daram2"
          />
          <ConfirmButton onClick={handleConfirmID}>중복확인</ConfirmButton>
        </Line>
        <SubText1>{currentConfirmID ? "사용 가능한 아이디에요!!" : "아이디는 12글자 이내로만 설정 가능해요."}</SubText1>
        <Text2>비밀번호를 입력해 주세요</Text2>
        <InputBox
          type="text"
          value={currentPW}
          onChange={handleChangePW}
          placeholder="EX) ehxhfl99"
        />
        <SubText2>비밀번호는 12글자 이내로만 설정 가능해요.</SubText2>
      </Container>
    </Outer>
  );
};

export default IdPwBox;

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
  height: 70.32%;
  border-radius: 20px;
  background-color: rgba(255, 255, 255, 0.85);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.div`
  color: #823b09;
  font-size: 150%;
`;
const Text2 = styled.div`
  font-size: 110%;
  margin-top: 7%;
`;
const Text1 = styled.div`
  font-size: 110%;
  margin-top: 7%;
  margin-bottom: -4%;
`;

const InputBox = styled.input`
  width: 60.53%;
  height: 13%;
  font-size: 110%;
  padding-left: 4%;
  border-radius: 10px;
  margin-top: 3%;
  text-align: left;
  background-color: #e5e5e5;
  color: #a3a3a3;
  border: none;
  font-family: "BMJUA", sans-serif;
  &::placeholder {
    color: #a3a3a3;
  }
`;
const InputBox2 = styled.input`
  width: 60.53%;
  height: 44.28%;
  font-size: 110%;
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
  margin-left: -4%;
`;

const SubText2 = styled.div`
  font-size: 70%;
  color: #737373;
  width: 60.53%;
  margin-top: 1%;
  margin-left:-3%;
`;
const SubText1 = styled.div`
  font-size: 70%;
  color: #737373;
  width: 60.53%;
  margin-top: -6%;
  margin-left:-3%;
`;

const ConfirmButton = styled.div`
  position: relative;
  z-index: 1px;
  margin-left: -18%;
  border: 1.5px solid #823b09;
  border-radius: 6px;
  background-color: #fef4e8;
  color: #823b09;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 20%;
  cursor: pointer;
  font-size: 14px;
  padding: 1%;
  padding-top: 0.5%;
  padding-bottom: 0.5%;
`;
const Line = styled.div`
  width: 100%;
  height: 30%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
