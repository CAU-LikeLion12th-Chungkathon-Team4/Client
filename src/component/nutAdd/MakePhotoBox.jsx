// 도토리 사진 추가 박스
import React, { useState } from "react";
import styled from "styled-components";

const MakePhotoBox = ({ setPhotos, photos }) => {
  const [preview, setPreview] = useState(null); // 미리보기
  const [currentImg, setCurrentImg] = useState(0); // 미리보기 인덱스 관리

  const handleFileChange = (event) => {
    const files = event.target.files;
    if (!files || files.length === 0) return;
    if (files.length > 7) {
      alert("사진은 최대 7장까지 업로드 가능합니다!!");
    } else {
      const fileArray = Array.from(files);
      //console.log(fileArray)
      setPhotos(fileArray); // 부모 컴포넌트로 파일 전달

      // 첫 번째 파일을 미리보기로 설정
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result); // 첫 번째 파일의 미리보기 저장
      };
      reader.readAsDataURL(fileArray[0]); // 첫 번째 파일만 미리보기 처리
      //console.log(preview)
    }
  };

  // 이전 이미지로 이동
  const goPrev = () => {
    if (photos.length > 0) {
      const prevIndex = currentImg === 0 ? photos.length - 1 : currentImg - 1;
      setCurrentImg(prevIndex); // 이전 이미지로 이동
      updatePreview(prevIndex); // 미리보기 업데이트
    }
  };

  // 다음 이미지로 이동
  const goNext = () => {
    if (photos.length > 0) {
      const nextIndex = currentImg === photos.length - 1 ? 0 : currentImg + 1;
      setCurrentImg(nextIndex); // 다음 이미지로 이동
      updatePreview(nextIndex); // 미리보기 업데이트
    }
  };

  // 미리보기 업데이트 함수
  const updatePreview = (index) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      setPreview(reader.result); // 선택한 파일의 미리보기 저장
    };
    reader.readAsDataURL(photos[index]);
  };

  return (
    <Outer>
      <Container>
        <Title>| STEP 1 |</Title>
        <Text>사진을 업로드해 주세요</Text>
        <SubContainer>
          <Arrow onClick={goPrev}>&lt;</Arrow>
          {preview ? (
            <Upload src={preview} />
          ) : (
            <Upload src="/source/camerabtn.png" />
          )}
          <Arrow onClick={goNext}>&gt;</Arrow>
        </SubContainer>
        <SelectPhoto>
          <label htmlFor="file-upload" style={{ cursor: "pointer" }}>
            사진 파일 선택
          </label>
          <input
            id="file-upload"
            type="file"
            accept="image/*"
            multiple
            onChange={handleFileChange}
            style={{ display: "none" }}
          />
        </SelectPhoto>
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

const SubContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  height: 55.41%;
  position: relative;
`;
const Arrow = styled.div`
  cursor: pointer;
  color: #823b09;
  font-size: 30px;
  position: relative;
  //z-index: 4px;
  //margin-bottom: 22%;
`;


const Upload = styled.img`
  width: 60%;
  height: 100%;
  object-fit: contain;
  border-radius: 10px;
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
  height: 10.33%;
  background-color: #823b09;
  color: white;
  font-size: 18px;
  border-radius: 10px;
`;
