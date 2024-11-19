import styled from 'styled-components';
import React, { useEffect, useState } from 'react'
import{ fetchDotoriCollection, fetchUserData } from "../../api/api_home.js";
import { useNavigate, useParams } from 'react-router-dom';

const Mypage = () => {
  const { urlRnd } = useParams(); // URL의 공유된 urlRnd 가져오기
  const [dotoriData, setDotoriData] = useState([]);
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const [userData, setUserData] = useState({
    username: "사용자",
    nickname: "사용자",
    squirrelImage: "../../../source/squ/defaultSquLeft.png",
    isOwner: false, // isOwner 초기값 추가
    });


    const navigate = useNavigate();
    const gomypage = () => {
      window.location.href = `/mypage/${localStorage.getItem("urlRnd")}`;
    }
  
    const ModaloutHandler= (e) => {
      if (e.target === e.currentTarget) {
        setShowLogoutModal(false);
      }
    }
  
    const logoutHandler = () => {
      localStorage.clear();
      navigate(`/`);
    }
  

useEffect(() => {
  const fetchData = async () => {

    const accessToken = localStorage.getItem("access"); // 로컬 스토리지에서 액세스 토큰 가져오기

    if (!accessToken) {
      console.error("No access token found!");
      return;
    }
    
    try {
      // 사용자 데이터 가져오기
      const user = await fetchUserData(urlRnd, accessToken);
      //const currentUrlRnd = window.location.pathname.split("/").pop(); // URL의 마지막 경로 가져오기
      //const isOwner = currentUrlRnd === user.urlRnd; // URL의 주인이 맞는지 확인
      //setUserData({ ...user, isOwner });
      setUserData({
        ...user,
        isOwner: user.urlRnd === urlRnd, // 공유된 urlRnd와 로그인 사용자 urlRnd 비교
      });
        // 도토리 데이터 가져오기
        const dotoriData = await fetchDotoriCollection(urlRnd);
        setDotoriData(dotoriData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
  };

  fetchData();
}, [urlRnd]);
  return (
    <Container>
      <BackgroundWrapper>
        <BackgroundImage src="/source/mypage.png" alt="Background" />
      <TopBar>
        <Logo onClick={() => window.location.href = `/home/${localStorage.getItem("urlRnd")}`} src="/source/logoWithName.png" alt="Logo" />
        <DotoriSection>
          <DotoriImage src="/source/singleDotori.png" alt="Single Dotori" />
          <DotoriCount>{dotoriData.length}</DotoriCount>
          <MypageBtn>
            <svg onClick={() => setShowLogoutModal(true)} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M16.6401 22H7.36009C6.34927 21.9633 5.40766 21.477 4.79244 20.6742C4.17722 19.8713 3.95266 18.8356 4.18009 17.85L4.42009 16.71C4.69613 15.1668 6.02272 14.0327 7.59009 14H16.4101C17.9775 14.0327 19.3041 15.1668 19.5801 16.71L19.8201 17.85C20.0475 18.8356 19.823 19.8713 19.2077 20.6742C18.5925 21.477 17.6509 21.9633 16.6401 22Z" fill="#823B09"/>
              <path d="M12.5001 12H11.5001C9.29096 12 7.50009 10.2092 7.50009 8.00001V5.36001C7.49743 4.46807 7.85057 3.61189 8.48127 2.98119C9.11197 2.35049 9.96815 1.99735 10.8601 2.00001H13.1401C14.032 1.99735 14.8882 2.35049 15.5189 2.98119C16.1496 3.61189 16.5028 4.46807 16.5001 5.36001V8.00001C16.5001 9.06088 16.0787 10.0783 15.3285 10.8284C14.5784 11.5786 13.561 12 12.5001 12Z" fill="#823B09"/>
            </svg>
          </MypageBtn>
        </DotoriSection>
        {
          showLogoutModal && ( 
            <ModalContainer>
            <ModalWrapper onClick={ModaloutHandler}>
              <Buttons>
                <Button onClick={gomypage}>내 정보</Button>
                <Button onClick={logoutHandler}>로그아웃</Button>
              </Buttons>
            </ModalWrapper>
          </ModalContainer>
           )
        }
      </TopBar>
        <Content>
        <Title1>내 정보</Title1>
            <Title>아이디</Title>
            <UserData>{userData.username}</UserData>
            <Title>다람쥐 닉네임</Title>
            <UserData>{userData.nickname}</UserData>
            <DaramImage src={userData.squirrelImage} alt="Daram" />
        </Content>
        </BackgroundWrapper>
    </Container>
  )
}

export default Mypage;


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

const Title1 = styled.div`
  font-size: 44px;
  color: #823b09;
  font-family: "EF_jejudoldam";
  margin-bottom: 3rem;
  margin-top: 7rem;
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
  margin-top: 1rem;
  display: flex;
  width: 360px;
  height: 360px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
`;

const TopBar = styled.div`
  top: 2%;
  position: fixed;
  height: 50px;
  width: 90%; /* 기본적으로 화면 전체 너비 */
  max-width: 380px; /* BackgroundWrapper의 최대 너비에 맞추기 */
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: 2%;
  z-index: 999;
`;

const Logo = styled.img`
  height: 30px;
  /* margin-left: 10px; */
  cursor: pointer;
`;

const DotoriSection = styled.div`
  display: flex;
  align-items: center;
`;

const DotoriImage = styled.img`
  height: 20px;
  margin-right: 10px;
  cursor: pointer;
  /* margin-top: 3px; */
`;

const DotoriCount = styled.span`
  font-size: 16px;
  color: var(--main, #823b09);
  margin-right: 20%;
  /* margin-top: 5px; */
`;
const MypageBtn = styled.button`
background-color: transparent;
border: none;
cursor: pointer;
margin-top: 7%;
`;

const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  display: flex;
  width: 335px;
  padding: 20px;
  align-items: center;
  gap: 9px;
  border-radius: 20px;
  background: #FFF;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.12);
  `;

  const Button = styled.button`
  border: none;
  display: flex;
  width: 213px;
  height: 45px;
  padding: 10px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 10px;
  border: 2px solid var(--main, #823B09);
  background: var(--white, #FFF);
  color: var(--main, #823B09);
font-family: BMJUA;
font-size: 18px;
font-style: normal;
font-weight: 400;
line-height: normal;
  cursor: pointer;
  &:hover {
    background: #FEF4E8;
  }
  `;

const ModalContainer = styled.div`
  //미디어 쿼리 적용 - 여기가 최상단. 하위 컴포넌트는 여기 값을 기준으로 %단위로 지정해서 비율 유지 가능
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  overflow-y: hidden;
  justify-content: center;
  align-items: center;
  background: rgba(38, 38, 38, 0.48);
  backdrop-filter: blur(2px);
  z-index: 100;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

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

const ModalWrapper = styled.div`
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
