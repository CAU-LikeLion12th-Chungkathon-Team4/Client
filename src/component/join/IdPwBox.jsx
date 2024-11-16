// 아이디 비밀번호 선택 창
import React, { useState } from "react";
import styled from "styled-components";
import { checkID } from "../../api/api_join";

const IdPwBox = ({ setSelectedID, setSelectedPW, setIsConfirmID }) => {
  const [currentID, setCurrentID] = useState(); // 지금 입력된 id
  const [currentPW, setCurrentPW] = useState(); // 지금 입력된 pw
  const [currentConfirmID, setCurrentConfirmID] = useState(false); // 중복확인 버튼 눌렸는지 여부
  const [subText, setSubText] = useState({
    message: "아이디는 알파벳+숫자 12글자 이내로만 설정 가능해요.",
    color: "#737373",
  }); // 중복확인에 따른 텍스트와 색 관리

  // ID 유효성 검사
  const isValidID = (id) => {
    const idRegex = /^[a-zA-Z0-9]{1,12}$/; // 알파벳+숫자, 최대 12글자
    return idRegex.test(id);
  };

  // 아이디 새로 입력시 동작
  const handleChangeID = (e) => {
    const newID = e.target.value;

    if (newID.length <= 12 && isValidID(currentID)) {
      setCurrentID(newID);
      setSelectedID(newID);
      setIsConfirmID(false);
      setCurrentConfirmID(false);
      setSubText({
        message: "아이디는 알파벳+숫자 12글자 이내로만 설정 가능해요.",
        color: "#737373",
      });
    } else {
      setCurrentID();
      setSubText({
        message: "아이디는 알파벳+숫자 12글자 이내로만 설정 가능해요.",
        color: "#dc2626",
      });
    }
  };

  // 비밀번호 새로 입력시 동작
  const handleChangePW = (e) => {
    const newPW = e.target.value;
    if (newPW.length <= 12) {
      setCurrentPW(newPW);
      setSelectedPW(newPW);
    } else {
      alert("비밀번호는 알파벳+숫자+특수문자 12글자 이내로만 설정 가능해요.");
    }
  };

  // 아이디 중복 확인 누를 때 동작
  const handleConfirmID = async () => {
    // 아이디 공백 시
    if (!currentID) {
      alert("아이디를 입력해 주세요!!");
      return;
    }
    // 중복 체크
    try {
      const response = await checkID(currentID);
      if (response.isExist) {
        setSubText({
          message: "중복된 아이디예요!!",
          color: "#dc2626",
        });
        setIsConfirmID(false);
        setCurrentConfirmID(false);
      } else {
        setSubText({
          message: "사용 가능한 아이디예요!",
          color: "#737373",
        });
        setIsConfirmID(true);
        setCurrentConfirmID(true);
      }
      //console.log(response);
    } catch (error) {
      console.error("중복 확인 에러:", error);
      setSubText({
        message: "중복 확인 중 에러가 발생했어요.",
        color: "#dc2626",
      });
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
        <SubText1 style={{ color: subText.color }}>{subText.message}</SubText1>
        <Text2>비밀번호를 입력해 주세요</Text2>
        <InputBox
          type="text"
          value={currentPW}
          onChange={handleChangePW}
          placeholder="EX) ehxhfl99"
        />
        <SubText2>
          비밀번호는 알파벳+숫자+특수문자 12글자 이내로만 설정 가능해요.
        </SubText2>
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
  margin-left: -3%;
`;
const SubText1 = styled.div`
  font-size: 70%;
  width: 60.53%;
  margin-top: -6%;
  margin-left: -3%;
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
