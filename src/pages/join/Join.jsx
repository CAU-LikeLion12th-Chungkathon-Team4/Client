//회원가입 페이지
import React, { useState } from "react";
import styled from "styled-components";
import SquBox from "../../component/join/SquBox";
import DefaultButton from "../../component/DefaultButton";
import InputNick from "../../component/join/InputNick";
import { useNavigate } from "react-router-dom";
import IdPwBox from "../../component/join/IdPwBox";
import { join } from "../../api/api_join";

const Join = () => {
  const [selectedImg, setSelectedImg] = useState("/source/Squ/defaultSqu.png"); // 선택된 다람쥐 사진
  const [selectedNick, setSelectedNick] = useState("도토리맛있다람쥐"); // 선택 닉네임
  const [selectedID, setSelectedID] = useState(); // 아이디
  const [selectedPW, setSelectedPW] = useState(); // 비밀번호
  const [isConfirmID, setIsConfirmID] = useState(false); // 중복확인 여부
  const [step, setStep] = useState(1); // 다음 단계 넘어가기 위한 체크용

  const navigate = useNavigate();

  // 아이디 유효성 검사
  const isValidID = (id) => {
    const idRegex = /^[a-zA-Z0-9]{1,12}$/; // 알파벳+숫자, 최대 12글자
    //console.log(idRegex.test(id))
    return idRegex.test(id);
  };

  // 비밀번호 유효성 검사
  const isValidPW = (pw) => {
    const pwRegex =
      /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*])[a-zA-Z\d!@#$%^&*]{1,12}$/; // 알파벳+숫자+특수문자
    return pwRegex.test(pw);
  };

  // 다음 단계 넘어가는 버튼 누를 때 동작들
  const handleStep = () => {
    // 첫단계만 필수사항이라서 로직 추가
    if (!selectedID) {
      alert("아이디 입력해 주세요!!");
    } else if (!isConfirmID) {
      alert("아이디 중복 검사 해주세요!!");
    } else if (!isValidID(selectedID)) {
      alert("아이디는 알파벳+숫자 조합으로 12글자 이내로 설정해 주세요.");
    } else if (!selectedPW) {
      alert("비밀번호 입력해 주세요");
    } else if (!isValidPW(selectedPW)) {
      alert(
        "비밀번호는 알파벳+숫자+특수문자 조합으로 12글자 이내로 설정해 주세요."
      );
    } else {
      setStep(step + 1);
    }
  };

  // 마지막 단계 버튼 누를 때 동작
  const handleSubmit = async () => {
    try {
      const response = await join(
        selectedID,
        selectedPW,
        selectedNick,
        selectedImg
      );
      localStorage.setItem("accessToken", response.accessToken);
      //console.log(response.accessToken);
      alert("회원가입 완료되었습니다!! 나의 도토리 나무로 이동합니다!!");
      if (response) {
        // 여기는 나중에 유저 고유 id 붙여서 url 이동해야함!!
        navigate("/home");
      }
    } catch (error) {
      console.error(error);
      alert("회원가입 중 문제가 발생했습니다. 다시 시도해 주세요.");
    }
  };

  return (
    <Container>
      <BackgroundWrapper>
        <BackgroundImage src="/source/joinBackground.png" alt="Background" />
      </BackgroundWrapper>
      <Content>
        <Title>회원가입</Title>
        {/* 현재 단계 추적하며 조건부 렌더링 */}
        {step === 1 && (
          <>
            <IdPwBox
              setSelectedID={setSelectedID}
              setSelectedPW={setSelectedPW}
              setIsConfirmID={setIsConfirmID}
            />
            <DefaultButton buttonText="다음" buttonFunc={handleStep} />
          </>
        )}
        {step === 2 && (
          <>
            <SquBox setSelectedImg={setSelectedImg} />
            <DefaultButton buttonText="다음" buttonFunc={handleStep} />
          </>
        )}
        {step === 3 && (
          <>
            <InputNick setSelectedNick={setSelectedNick} />
            <DefaultButton
              buttonText="만나서 반갑다람쥐!"
              buttonFunc={handleSubmit}
            />
          </>
        )}
      </Content>
    </Container>
  );
};

export default Join;

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
