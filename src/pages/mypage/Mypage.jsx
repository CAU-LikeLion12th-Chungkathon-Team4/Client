import React from 'react'
import styled from 'styled-components';

const dummy = {
    email: 'kimdaram@daram.com',
    nickname: '김다람',
    profile: 'source/daram1.png'
}
const Mypage = () => {
  return (
    <Container>
        <BackgroundImage src="/source/mypagebackground.png" alt="Background" />
        <Content>
            <Title>가입 이메일</Title>
            <UserData>{dummy.email}</UserData>
            <Title>다람쥐 닉네임</Title>
            <UserData>{dummy.nickname}</UserData>
            <DaramImage src={dummy.profile} alt="Daram" />
        </Content>
    </Container>
  )
}

export default Mypage;


const Container = styled.div`
  width: 100%;
  height: 100vh; /* 화면 전체 높이 */
  display: flex;
  flex-direction: column;
  position: relative; /* 부모 요소에 relative를 적용 */
  justify-content: flex-end; /* Content를 하단에 붙이기 */
  z-index: 0;
`;

const Content = styled.div`
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  position: absolute; /* Content를 절대 위치로 고정 */
  bottom: 0; /* 화면 하단에 위치 */
  padding-bottom: 20px; /* 하단 여백 추가 */
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
  width: 125px;
  height: 20px;
  padding: 10px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  border-radius: 10px;
  border: 2px solid var(--main, #823B09);
  background: #FEF4E8;
`;

const UserData = styled.div`
  color: var(--black, #000);
  text-align: center;

  /* text/body 1 */
  font-family: "BM JUA_TTF";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 24px */
`;

const DaramImage = styled.img`
  display: flex;
  width: 360px;
  height: 360px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
`;
