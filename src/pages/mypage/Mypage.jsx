import React from 'react'
import styled from 'styled-components';
import Header from '../../component/Header';

const dummy = {
    username: 'kimdaram@daram.com',
    password: '1234',
    nickname: '김다람',
    profile: 'source/daram1.png'
}
const Mypage = () => {
  return (
    <Container>
        <BackgroundImage src="/source/mypage.png" alt="Background" />
        <Header/>
        <Content>
        <Title1>내 정보</Title1>
            <Title>아이디</Title>
            <UserData>{dummy.username}</UserData>
            <Title>비밀번호</Title>
            <UserData>{dummy.password}</UserData>
            <Title>다람쥐 닉네임</Title>
            <UserData>{dummy.nickname}</UserData>
            <DaramImage src={dummy.profile} alt="Daram" />
        </Content>
    </Container>
  )
}

export default Mypage;


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
const Title1 = styled.div`
  font-size: 44px;
  color: #823b09;
  font-family: "EF_jejudoldam";
  margin-bottom: 3rem;
`;

const Content = styled.div`
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  position: absolute; /* Content를 절대 위치로 고정 */
  bottom: 0; /* 화면 하단에 위치 */
`;


const BackgroundImage = styled.img`
  width: 100%;
  height: auto;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
`;

const Title = styled.div`
  display: flex;
  width: 105px;
  height: 15px;
  padding: 10px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  border-radius: 10px;
  border: 2px solid var(--main, #823B09);
  background: #FEF4E8;
  color: var(--main, #823B09);

  /* text/body 1 */
  font-size: 16px;
  font-weight: 400;
  line-height: 150%; /* 24px */
`;

const UserData = styled.div`
  margin-top: 4px;
  color: var(--black, #000);
  text-align: center;

  /* text/body 1 */
  font-size: 16px;
  font-weight: 400;
  line-height: 150%; /* 24px */
  margin-bottom: 20px;
`;

const DaramImage = styled.img`
  display: flex;
  width: 360px;
  height: 360px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
`;
