// 도토리 선물하기
import React, { useState } from "react";
import styled from "styled-components";
import DefaultButton from "../../component/DefaultButton";
import MakePhotoBox from "../../component/nutAdd/MakePhotoBox";
import MakeMessageBox from "../../component/nutAdd/MakeMessageBox";
import MakeQuiz from "../../component/nutAdd/MakeQuiz";
import { useNavigate, useParams } from "react-router-dom";
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
  const [quizAns, setQuizAns] = useState(null); // 퀴즈 정답

  const { urlRnd } = useParams(); // URL에서 urlRnd 가져오기

  const [isUploading, setIsUploading] = useState(false); // 업로드 상태 관리

  const navigate = useNavigate();

  // step 관리 함수
  const handleStep = () => {
    if (photos.length == 0) {
      alert("사진을 등록해 주세요!!");
    } else {
      setStep(step + 1);
    }
  };

  // 뒤로 가기
  const handleStepBack = () => {
    console.log(step)
    if (step == 1) {
      navigate(`/home/${urlRnd}`);
    } else {
      console.log(step)
      setStep(step - 1);
    }
  };

  // 일단 임시 출력용 - 나중에 api연결 - 도토리 묶음 제출
  const handleSubmit = async () => {
    if (!quizText) {
      alert("퀴즈를 만들어 주세요!!");
    } else if (quizAns == null) {
      alert("퀴즈 답변을 작성해 주세요!!");
    } else {
      // api 보내기 로직
      try {
        // 임시코드 - urlRnd 일단 로컬스토리지 저장된거 가져오기 - 나중에 url에서 가져와야 함
        //const testUrlRnd = localStorage.getItem("urlRnd");

        setIsUploading(true); // 업로드 시작 시 모달 표시

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

        if (localStorage.getItem("urlRnd")) {
          // 홈 화면으로 이동
          navigate(`/home/${urlRnd}`);
        } else {
          // 선물하기 플로우 마지막 화면 렌더링
          setStep(step + 1);
        }
      } catch (error) {
        if (error.response && error.response.status === 413) {
          // 에러 코드 413인 경우 alert 출력
          alert(
            "도토리가 너무 커서 가방에 안들어가요 ㅠㅠ 사진 용량 줄여주세요!!"
          );
        } else {
          console.error(error);
          alert(
            "도토리를 저장하는 도중 문제가 발생했어요. 다시 시도해 주세요!"
          );
        }
      } finally {
        setIsUploading(false); // 업로드 완료 후 모달 닫기
      }
    }
    // console.log(photos);
    // console.log(nick);
    // console.log(message);
    // console.log(quizText);
    // console.log(quizAns);
  };

  const goLogin = () => {
    navigate("/login");
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
            <ButtonLine>
              <BackButton onClick={handleStepBack}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M14 19l-7-7 7-7" />
                </svg>
              </BackButton>
              <StyledDefaultButton onClick={handleStep}>
                다음
              </StyledDefaultButton>
            </ButtonLine>
          </>
        )}
        {step === 2 && (
          <>
            <MakeMessageBox setNick={setNick} setMessage={setMessage} />
            <ButtonLine>
              <BackButton onClick={handleStepBack}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M14 19l-7-7 7-7" />
                </svg>
              </BackButton>
              <StyledDefaultButton onClick={handleStep}>
                다음
              </StyledDefaultButton>
            </ButtonLine>
          </>
        )}
        {step === 3 && (
          <>
            <MakeQuiz setQuizAns={setQuizAns} setQuizText={setQuizText} />
            <ButtonLine>
              <BackButton onClick={handleStepBack}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M14 19l-7-7 7-7" />
                </svg>
              </BackButton>
              <StyledDefaultButton onClick={handleSubmit}>
                마치기
              </StyledDefaultButton>
            </ButtonLine>
          </>
        )}
        {step === 4 && (
          <>
            <ConfirmNutAdd goLogin={goLogin} />
          </>
        )}
      </Content>
      {isUploading && ( // 업로드 중일 때 모달 표시
        <UploadingModal>
          <Text>이미지를 업로드 중입니다...</Text>
          <Text>잠시만 기다려주세요!</Text>
        </UploadingModal>
      )}
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

const UploadingModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(255, 255, 255, 0.9);
  padding: 20px 40px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  z-index: 100;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  
`;

const ButtonLine = styled.div`
  width: 100%;
  height: 4.541%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 5%;
`;

const BackButton = styled.div`
  width: 9%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background-color: #e5e5e5;
  cursor: pointer;

  svg {
    fill: #737373;
    width: 60%;
    height: 60%;
  }
`;

const StyledDefaultButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30.8%;
  height: 100%;
  background-color: #823b09;
  color: white;
  font-size: 18px;
  border-radius: 10px;
  cursor: pointer;
`;

const Text = styled.div`
  font-size: 18px;
  color: #333;
  text-align: center;
`
