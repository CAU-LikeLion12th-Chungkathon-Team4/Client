// 도토리 선물하기
import React, { useState } from "react";
import styled from "styled-components";
import DefaultButton from "../../component/DefaultButton";
import MakePhotoBox from "../../component/nutAdd/MakePhotoBox";
import MakeMessageBox from "../../component/nutAdd/MakeMessageBox";
import MakeQuiz from "../../component/nutAdd/MakeQuiz";
import { useNavigate } from "react-router-dom";
import ConfirmNutAdd from "../../component/nutAdd/ConfirmNutAdd";
import { nutAdd } from "../../api/api_nutAdd";

const NutAdd = () => {
  const [step, setStep] = useState(1); // 스탭 관리
  const [photos, setPhotos] = useState([]); // 사진 관리
  const [nick, setNick] = useState("너의짱친이다람쥐"); // 닉네임 관리
  const [message, setMessage] = useState(
    "올해도 너와 함께해서 너무 행복했어!! 우리 내년에도 함께하자!!"
  ); // 메세지 관리
  const [quizText, setQuizText] = useState(""); // 퀴즈 텍스트
  const [quizAns, setQuizAns] = useState(true); // 퀴즈 정답

  const navigate = useNavigate();

  // step 관리 함수
  const handleStep = () => {
    if (photos.length == 0) {
      alert("사진을 등록 해주세요!!");
    } else {
      setStep(step + 1);
    }
  };

  // 일단 임시 출력용 - 나중에 api연결 - 도토리 묶음 제출
  const handleSubmit = async () => {
    if (!quizText) {
      alert("퀴즈를 만들어 주세요!!");
    } else {
      // api 보내기 로직
      try {
        const requestJson = {
          sender: nick,
          message: message,
          quiz: {
            question: quizText,
            answer: quizAns,
          },
        };
  
        // FormData 생성
        const formData = new FormData();
        formData.append("requestJson", JSON.stringify(requestJson)); // JSON 문자열 추가
  
        // 사진 파일 추가
        photos.forEach((file) => {
          formData.append("files", file);
        });

        const response = await nutAdd(formData, urlRnd);
        console.log(response.data);
        alert("등록되었습니다!!");
      } catch (error) {
        console.error(error);
        alert("도토리 보내기 중 에러가 발생했습니다. 다시 시도해 주세요.");
      }
    }
    console.log(photos);
    console.log(nick);
    console.log(message);
    console.log(quizText);
    console.log(quizAns);

    if (localStorage.getItem("userID")) {
      // 홈 화면으로 이동
      navigate("/home");
    } else {
      // 선물하기 플로우 마지막 화면 렌더링
      setStep(step + 1);
    }
  };

  const goJoin = () => {
    navigate("/join");
  };

  return (
    <Container>
      <BackgroundWrapper>
        <BackgroundImage src="/source/joinBackground.png" alt="Background" />
      </BackgroundWrapper>
      <Content>
        <Title>도토리 선물하기</Title>
        {step === 1 && (
          <>
            <MakePhotoBox setPhotos={setPhotos} photos={photos} />
            <DefaultButton buttonText="다음" buttonFunc={handleStep} />
          </>
        )}
        {step === 2 && (
          <>
            <MakeMessageBox setNick={setNick} setMessage={setMessage} />
            <DefaultButton buttonText="다음" buttonFunc={handleStep} />
          </>
        )}
        {step === 3 && (
          <>
            <MakeQuiz setQuizAns={setQuizAns} setQuizText={setQuizText} />
            <DefaultButton buttonText="마치기" buttonFunc={handleSubmit} />
          </>
        )}
        {step === 4 && (
          <>
            <ConfirmNutAdd goJoin={goJoin} />
          </>
        )}
      </Content>
    </Container>
  );
};

export default NutAdd;

const Container = styled.div`
  //미디어 쿼리 적용 - 여기가 최상단. 하위 컴포넌트는 여기 값을 기준으로 %단위로 지정해서 비율 유지 가능
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  overflow-y: hidden;
  justify-content: center;
  align-items: center;

  // 375-440까지는 화면 비율에 맞춰서 변경. 이외 범위는 최소 최대 범위로 고정
  @media (min-width: 440px) {
    // 화면너비가 440px 이상일 때 고정 // iphone 16 pro max
    width: 440px;
  }

  @media (max-width: 375px) {
    // 화면너비가 375px 이하일 때 고정 // iphone 13 mini
    width: 375px;
  }

  @media (min-height: 956px) {
    // 화면높이가 956px 이상일 때 고정 // iphone 16 pro max
    height: 956px;
  }

  @media (max-height: 812px) {
    // 화면높이가 812px 이하일 때 고정 // iphone 13 mini
    height: 812px;
  }
`;

const BackgroundWrapper = styled.div`
  position: absolute;
  top: 0;
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
  overflow-y: hidden;
  //height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 0;

  // 375-440까지는 화면 비율에 맞춰서 변경. 이외 범위는 최소 최대 범위로 고정
  @media (min-width: 440px) {
    // 화면너비가 440px 이상일 때 고정 // iphone 16 pro max
    width: 440px;
  }

  @media (max-width: 375px) {
    // 화면너비가 375px 이하일 때 고정 // iphone 13 mini
    width: 375px;
  }

  @media (min-height: 956px) {
    // 화면높이가 956px 이상일 때 고정 // iphone 16 pro max
    height: 956px;
  }

  @media (max-height: 812px) {
    // 화면높이가 812px 이하일 때 고정 // iphone 13 mini
    height: 812px;
  }
`;

const BackgroundImage = styled.img`
  width: 100%;
  height: 100%;
`;

const Content = styled.div`
  position: absolute;
  top: 0;
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
  overflow-y: hidden;
  //height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  flex-direction: column;
  gap: 3%;

  // 375-440까지는 화면 비율에 맞춰서 변경. 이외 범위는 최소 최대 범위로 고정
  @media (min-width: 440px) {
    // 화면너비가 440px 이상일 때 고정 // iphone 16 pro max
    width: 440px;
  }

  @media (max-width: 375px) {
    // 화면너비가 375px 이하일 때 고정 // iphone 13 mini
    width: 375px;
  }

  @media (min-height: 956px) {
    // 화면높이가 956px 이상일 때 고정 // iphone 16 pro max
    height: 956px;
  }

  @media (max-height: 812px) {
    // 화면높이가 812px 이하일 때 고정 // iphone 13 mini
    height: 812px;
  }
`;

const Title = styled.div`
  font-size: 44px;
  color: #823b09;
  font-family: "EF_jejudoldam";
  //margin-bottom:8%;
`;
