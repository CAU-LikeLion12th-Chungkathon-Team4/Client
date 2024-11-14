import React, { useState } from "react";
import styled from "styled-components";

const SquBox = () => {
  const squImgList = [
    "/source/Squ/astronautSqu.png",
    "/source/Squ/cauClothSqu.png",
    "/source/Squ/constructSqu.png",
    "/source/Squ/defaultSqu.png",
    "/source/Squ/luckSqu.png",
    "/source/Squ/programmerSqu.png",
    "/source/Squ/puangSqu.png",
    "/source/Squ/santaSqu.png",
    "/source/Squ/sheepSqu.png",
    "/source/Squ/skrrSqu.png",
    "/source/Squ/tubeSqu.png",
  ];

  const [currentImg, setCurrentImg] = useState(4);

  // 이전 이미지로 이동
  const goPrev = () => {
    setCurrentImg((prevIndex) =>
      prevIndex === 0 ? squImgList.length - 1 : prevIndex - 1
    );
  };

  // 다음 이미지로 이동
  const goNext = () => {
    setCurrentImg((prevIndex) =>
      prevIndex === squImgList.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <Container>
      <Title>| STEP 1|</Title>
      <Text>원하는 다람쥐를 선택해 주세요</Text>
      <SubContainer>
        <Arrow onClick={goPrev}>&lt;</Arrow>
        <ImgBox>
          <Img src={squImgList[currentImg]} />
          <ImgPlate src="/source/squPlate.png" />
        </ImgBox>
        <Arrow onClick={goNext}>&gt;</Arrow>
      </SubContainer>
    </Container>
  );
};

export default SquBox;

const Container = styled.div`
  width: 91.4668%;
  height: 55.9113%;
  border-radius: 7%;
  background-color: rgba(255, 255, 255, 0.85);
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  gap:3%;
`;

const Title = styled.div`
  color: #823b09;
  font-size: 24px;
  font-weight: 200;
  margin-top:4%;
`;
const Text = styled.div``;

const SubContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  position: relative;
`;
const Arrow = styled.div`
  cursor: pointer;
  color: #823b09;
  font-size: 24px;
  position: relative;
  z-index: 1px;
`;
const Img = styled.img`
  margin-bottom: -22.6%;
  position: relative;
  z-index: 1px;
`;
const ImgPlate = styled.img``;

const ImgBox = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  margin-left: -10%;
  margin-right: -10%;
`;
