import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { loginHandler } from "../../api/api_login";

const Login = () => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const onChangeId = (e) => {
    setUsername(e.target.value);
  };

  const onChangePw = (e) => {
    setPassword(e.target.value);
  };

  const router = useNavigate();

  const onClick = async () => {
    try {
      const result = await loginHandler(username, password);
      localStorage.setItem("access", result.accessToken);
      localStorage.setItem("refresh", result.refreshToken);
      localStorage.setItem("id", result.id);
      localStorage.setItem("urlRnd", result.urlRnd);
      router("/home");
    } catch (error) {
      alert("아이디 또는 비밀번호가 잘못되었어요.");
    }
  };

  return (
    <Container >
      <BackgroundImage src="/source/joinBackground.png" alt="Background" />
      <BigWrapper>
        <Title1>로그인</Title1>
        <Wrapper>
          <Form>
            <Inputs>
              <div>아이디</div>
              <input value={username} onChange={onChangeId} placeholder="아이디를 입력해주세요." />
              <div>비밀번호</div>
              <input type="password" value={password} onChange={onChangePw} placeholder="비밀번호를 입력해주세요." />
            </Inputs>
          </Form>
        </Wrapper>
        <LoginBtn onClick={onClick}>로그인</LoginBtn>
        <Title>아직 포토리 계정이 없으신가요?</Title>
        <SignupLink to="/join">회원가입하러 가기</SignupLink>
      </BigWrapper>
    </Container>
  );
};

export default Login;

const Title1 = styled.div`
  font-size: 44px;
  color: #823b09;
  font-family: "EF_jejudoldam";
  margin-bottom: 7rem;
`;


const Container = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
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

const BackgroundImage = styled.img`
  width: 100%;
  height: auto;
`;

const Wrapper = styled.div`
  width: 73%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  flex-shrink: 0;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.85);
  padding: 30px;
  padding: 21px 42px;
`;

const BigWrapper = styled.div`  
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  `;

const LoginBtn = styled.button`
  width: 220px;
  height: 45px;
  border-radius: 10px;
  padding: 10px;
  background: #823B09;
  border: none;
  cursor: pointer;
  color: #FFF;
  font-size: 18px;
  font-weight: 400;
  margin-top: 6rem;
  margin-bottom: 3rem;
  &:hover {
    color: #823B09;
    background: #FEF4E8;
    border: 2px solid var(--main, #823B09);
  }
`;  

const Title = styled.div`
  color: var(--black, #000);
  margin-bottom: 1rem;
  /* text/body 2 */
  font-size: 14px;
  text-align: center;
  font-weight: 400;
`;

const Form = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  div {
    font-size: 16px;
    color: grey;
  }
`;

const Inputs = styled.div`
  display: flex;
  align-items: start;
  flex-direction: column;
  gap: 8px;
  div{
    color: #000;
    text-align: center;

    /* text/body 1 */
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 24px */
  }
  input {
    font-size: 20px;
    height: 20px;
    width: 243px;
    border-radius: 10px;
    border: none;
    background: var(--neutral-200, #E5E5E5);
    padding: 10px;
    margin-bottom: 0.2rem;
    &::placeholder {
      color: var(--neutral-400, #A3A3A3);
    text-align: left;
    /* text/body 1 */
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 24px */
    }
  }
`;

const SignupLink = styled(Link)`
  display: inline-flex;
  padding: 10px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 10px;
  border: 2px solid var(--main, #823B09);
  background: #FEF4E8;
  cursor: pointer;
  color: var(--main, #823B09);

  /* text/body 2 */
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 21px */
  &:hover {
    color: white;
  }
`;