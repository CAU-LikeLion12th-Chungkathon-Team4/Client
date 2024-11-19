// 도토리 메세지 전송 박스
import React from "react";
import styled from "styled-components";

const MakeMessageBox = ({ setNick, setMessage }) => {

  // 닉네임 변화 감지
  const handleChangeNick = (e) => {
    const newNick = e.target.value;
    if (newNick.length <= 10) {
      setNick(newNick);
    }
  };

  // 메세지 변화 감지
  const handleChangeMessage = (e) => {
    const newMessage = e.target.value;
    if (newMessage.length <= 80) {
      setMessage(newMessage);
    }
  };

  return (
    <Outer>
      <Container>
        <Title>| STEP 2 |</Title>
        <TextBox>
          <Text>닉네임과 함께 전하고 싶은</Text>
          <Text>메서지를 입력해 주세요. (80자 이내)</Text>
        </TextBox>
        <NickBox>
          <SubText>닉네임</SubText>
          <InputBox
            maxLength={10}
            type="text"
            //value={currentNick}
            onChange={handleChangeNick}
            placeholder="EX) 너의짱친이다람쥐"
          />
        </NickBox>
        <MessageBox>
          <SubText>메시지</SubText>
          <InputBox2
            maxLength={80}
            //value={currentNick}
            onChange={handleChangeMessage}
            placeholder="올해도 너와 함께해서 너무 행복했어!! 우리 내년에도 함께하자!!"
          />
        </MessageBox>
        <SubTitleBox>
        <SubTitle>메시지를 입력하지 않을 시</SubTitle>
        <SubTitle>기본 설정된 메시지가 함께 발송돼요.</SubTitle>
        </SubTitleBox>
        
      </Container>
    </Outer>
  );
};

export default MakeMessageBox;

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
`;

const Title = styled.div`
  color: #823b09;
  font-size: 150%;
  margin-top: 4%;
`;
const Text = styled.div`
  font-size: 19px;
`;

const SubText = styled.div`
  font-size: 14px;
  color: #737373;
  width: 60.53%;
  margin-left: -7%;
  margin-bottom: 1%;
`;

const SubTitle = styled.div`
  color: #737373;
`;
const InputBox = styled.input`
  width: 63.93%;
  height: 65%;
  font-size: 16px;
  padding-left: 3%;
  padding-right: 3%;
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

const InputBox2 = styled.textarea`
  width: 63.93%;
  height: 70%;
  font-size: 16px;
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
  margin-top:3%;
  margin-bottom: 5%;
  height:10%;
  gap:13%;
`;
const NickBox = styled.div`
  width: 100%;
  height: 19%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const MessageBox = styled.div`
  width: 100%;
  height: 43%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const SubTitleBox = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 13%;
`