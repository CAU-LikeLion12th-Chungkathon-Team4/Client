import React, { useEffect, useState } from "react";
import styled from "styled-components";
import DefaultButton from "../DefaultButton";

const MakePhotoBox = () => {
  return (
    <Outer>
      <Container>
        <Title>| STEP 1 |</Title>
        <Text>사진을 업로드 해주세요</Text>
        <Upload src="/source/camerabtn.png" />
        <SelectPhoto>사진 파일 선택</SelectPhoto>
        <SubText>사진 파일 업로드는 한 번에 7장까지 가능해요</SubText>
      </Container>
    </Outer>
  );
};

export default MakePhotoBox;

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
  justify-content: space-evenly;
  align-items: center;
`;

const Title = styled.div`
  color: #823b09;
  font-size: 150%;
`;
const Text = styled.div`
  font-size: 110%;
`;
const Upload = styled.img`
  width: 62.09%;
  height: 44.83%;
`;

const SubText = styled.div`
  font-size: 70%;
  color: #737373;
`;

const SelectPhoto = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40.8%;
  height: 9.33%;
  background-color: #823b09;
  color: white;
  font-size: 18px;
  border-radius: 10px;
`;
