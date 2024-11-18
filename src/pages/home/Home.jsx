import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import { fetchDotoriCollection, fetchUserData } from "../../api/api_home.js";
import QuizModal from "../../component/QuizModal.jsx";
import DotoriModal from "../../component/DotoriModal.jsx";
import { yourUrlRndAtom } from "../../recoil/urlRndAtom.js";
import { useRecoilState } from 'recoil';

const Home = () => {
  const { urlRnd } = useParams(); // URL의 공유된 urlRnd 가져오기
  const [scrollControl, setScrollControl] = useState(0);
  const [dotoriData, setDotoriData] = useState([]);
  const [quizmodalOpen, setquizModalOpen] = useState(false);
  const [dotorimodalOpen, setdotoriModalOpen] = useState(false);
  const [userData, setUserData] = useState({
    nickname: "사용자",
    squirrelImage: "../../../source/squ/defaultSquLeft.png",
    isOwner: false, // 초기값 설정
  });
  const [showClipboardMessage, setShowClipboardMessage] = useState(false); // 복사 알림 메시지 상태
  const [yourUrlRndValue, setYourUrlRndAtom] = useRecoilState(yourUrlRndAtom);
  const [isAtBottom, setIsAtBottom] = useState(false);

  const navigate = useNavigate();

    // 스크롤 상태를 확인하는 함수
    const checkScrollPosition = () => {
      const isBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight;
      setIsAtBottom(isBottom);
    };

      // 스크롤 이벤트 핸들러 등록
  useEffect(() => {
    window.addEventListener("scroll", checkScrollPosition);
    return () => window.removeEventListener("scroll", checkScrollPosition);
  }, []);

  // 스크롤 아래로 이동
  const scrollToBottom = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
  };

  // url에서 공유받은 링크의 yourUrlRnd 값 가져오기
  useEffect(() => {
     setYourUrlRndAtom(urlRnd);
     console.log(yourUrlRndValue);
   }, [yourUrlRndValue, setYourUrlRndAtom]);

  useEffect(() => {
    window.scrollTo({
      top: 5000,
      behavior: "smooth",
    });
  }, [scrollControl]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setScrollControl(1);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
        const accessToken = localStorage.getItem("access");

        if (!accessToken) {
            navigate("/join");
            return;
        }

        try {
            // 사용자 데이터 가져오기
            const user = await fetchUserData(urlRnd, accessToken);
            const localUrlRnd = localStorage.getItem("urlRnd");
            const isOwner = localUrlRnd === urlRnd;

            setUserData({ ...user, isOwner });

            // 도토리 데이터 가져오기
            const rawDotoriData = await fetchDotoriCollection(urlRnd);

            // createdAt 기준 정렬 후 custom_id 재할당
            const sortedDotoriData = rawDotoriData
                .sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt))
                .map((item, index) => ({
                    ...item,
                    custom_id: index, // 정렬된 순서에 맞게 ID 재할당
                }));

            setDotoriData(sortedDotoriData);

            console.log("Fetched Dotori Data:", sortedDotoriData);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    fetchData();
}, [urlRnd, navigate]);

// 이미지 클릭 핸들러 수정
const handleImageClick = (isLock, dotoriCollectionId) => {
  if (isLock) {
    navigate(`/dotoricollection/${dotoriCollectionId}/quiz`);
  } else {
    navigate(`/${dotoriCollectionId}/open`);
  }
};

  const handleGiftButtonClick = () => {
    if (userData.isOwner) {
      // URL 복사 로직
      const currentUrl = window.location.href;
      navigator.clipboard.writeText(currentUrl)
        .then(() => {
          setShowClipboardMessage(true); // 복사 알림 메시지 표시
          setTimeout(() => {
            setShowClipboardMessage(false); // 일정 시간 후 메시지 숨기기
          }, 3000); // 3초 동안 표시
        })
        .catch((error) => {
          console.error("URL 복사 실패:", error);
        });
    } else {
      navigate(`/gift/${urlRnd}`); // 도토리 선물하기 페이지로 이동
    }
  };

  // 홈 화면 렌더링 될 때 리코일로 업데이트

  return (
    <Container>
      <BackgroundWrapper>
      <TopBar>
        <Logo onClick={() => window.location.href = `/home/${localStorage.getItem("urlRnd")}`} src="/source/logoWithName.png" alt="Logo" />
        <DotoriSection>
          <DotoriImage src="/source/singleDotori.png" alt="Single Dotori" />
          <DotoriCount>{dotoriData.length}</DotoriCount>
          <MypageBtn
              onClick={() => {
                if (userData.isOwner) {
                  // 소유자인 경우 마이페이지로 이동
                  window.location.href = `/mypage/${localStorage.getItem("urlRnd")}`;
                } else {
                  // 소유자가 아닌 경우 로그인 페이지로 이동
                  navigate("/login");
                }
              }}
            >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M16.6401 22H7.36009C6.34927 21.9633 5.40766 21.477 4.79244 20.6742C4.17722 19.8713 3.95266 18.8356 4.18009 17.85L4.42009 16.71C4.69613 15.1668 6.02272 14.0327 7.59009 14H16.4101C17.9775 14.0327 19.3041 15.1668 19.5801 16.71L19.8201 17.85C20.0475 18.8356 19.823 19.8713 19.2077 20.6742C18.5925 21.477 17.6509 21.9633 16.6401 22Z" fill="#823B09"/>
              <path d="M12.5001 12H11.5001C9.29096 12 7.50009 10.2092 7.50009 8.00001V5.36001C7.49743 4.46807 7.85057 3.61189 8.48127 2.98119C9.11197 2.35049 9.96815 1.99735 10.8601 2.00001H13.1401C14.032 1.99735 14.8882 2.35049 15.5189 2.98119C16.1496 3.61189 16.5028 4.46807 16.5001 5.36001V8.00001C16.5001 9.06088 16.0787 10.0783 15.3285 10.8284C14.5784 11.5786 13.561 12 12.5001 12Z" fill="#823B09"/>
            </svg>
          </MypageBtn>
        </DotoriSection>
      </TopBar>
      {/* 복사 알림 메시지 */}
      {showClipboardMessage && (
        <ClipboardMessage>
          클립보드에 복사되었습니다.<br /><br />
          지금 친구들에게 <span>링크를 공유</span>해<br />
          <span>도토리를 수집</span>해 보세요!
        </ClipboardMessage>
      )}
        <Content>
        <LockImagesWrapper>
        {dotoriData
          .slice() // 원본 배열 복사
          .reverse() // 배열 순서 뒤집기
          .map(({ custom_id, dotori_collection_id, lock, sender }) => (
            <LockItem
                key={custom_id}
                align={custom_id % 2 === 0 ? "left" : "right"}
            >
                <LockImage
                    src={lock ? "/source/lock.png" : "/source/dotoriPocket.png"}
                    className={'modal-open-btn'}
                    alt={lock ? "Lock" : "Nut"}
                    onClick={() => lock ? setquizModalOpen(true) : setdotoriModalOpen(true)}
                />
                <SenderName align={custom_id % 2 === 0 ? "left" : "right"}>
                  {sender}
                </SenderName>
            </LockItem>

          ))}
          </LockImagesWrapper>
          <BottomSection>
            <Title>
              <span>{userData.nickname}</span> 님의 나무
            </Title>
            <BoxWrapper>
              <SquirrelImage src={userData.squirrelImage} alt="Squirrel" />
              <RightSection>
                <AcornText>
                  추억 도토리가 <span>{dotoriData.length}</span>개
                  <br />
                  쌓이는 중이에요!
                </AcornText>
                <GiftButton onClick={handleGiftButtonClick}>
                  {userData.isOwner ? "도토리 요청하기" : "도토리 선물하기"}
                </GiftButton>
              </RightSection>
            </BoxWrapper>
          </BottomSection>
          {quizmodalOpen && (
          <QuizModal setquizModalOpen={setquizModalOpen} /> ) }
                {
        dotorimodalOpen && (
          <DotoriModal setdotoriModalOpen={setdotoriModalOpen} /> ) }
        </Content>
      </BackgroundWrapper>
      <ScrollToBottomButton
        src="../../../source/buttonForDown.png"
        alt="Scroll to Bottom"
        onClick={scrollToBottom}
        isVisible={!isAtBottom} // 버튼 표시 여부 결정
      />
    </Container>
  );
};

export default Home;

// Styled Components
const Container = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const ScrollToBottomButton = styled.img`
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 50px;
  height: 50px;
  cursor: pointer;
  //display: ${({ isVisible }) => (isVisible ? "block" : "none")};
  z-index: 1000;
`;

const BackgroundWrapper = styled.div`
  width: 100vw;
  margin-top: 470vh;
  height: calc(100vw * 12.92);
  background-image: url("/source/fullTree.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top center;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 0;

  @media (min-width: 440px) {
    width: 440px;
    height: calc(440px * 12.92);
  }

  @media (max-width: 375px) {
    width: 375px;
    height: calc(375px * 12.92);
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 1;
  width: 100%;
  height: 100%;
`;
const TopBar = styled.div`
  top:2%;
  position: fixed;
  height: 50px;
  width: 90%; /* 기본적으로 화면 전체 너비 */
  max-width: 380px; /* BackgroundWrapper의 최대 너비에 맞추기 */
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: 2%;
  z-index: 10;
`;

const Logo = styled.img`
  height: 30px;
`;

const DotoriSection = styled.div`
  display: flex;
  align-items: center;
`;

const DotoriImage = styled.img`
  height: 20px;
  margin-right: 10px;
`;

const DotoriCount = styled.span`
  font-size: 16px;
  color: #333;
  margin-right: 20%;
`;
const MypageBtn = styled.button`
background-color: transparent;
border: none;
`;
const LockImagesWrapper = styled.div`
  width: 56%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6.8vh;
  position: absolute;
  bottom: 6.5%; /* 배경 높이의 2/3 지점 */
  z-index: 1;
`;

const LockItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: ${(props) => (props.align === "left" ? "flex-start" : "flex-end")};
  width: 100%;
  margin-left: ${(props) => (props.align === "left" ? "4.5vw" : "0")};
  margin-right: ${(props) => (props.align === "right" ? "0" : "0")};
`;

const LockImage = styled.img`
  width: 20vw;
  max-width: 100px; /* 너무 커지지 않도록 제한 */
  height: auto;
  cursor: pointer;
`;

const SenderName = styled.span`
  font-size: 18px;
  margin-top: 8px;
  color: white;
  text-align: center;
  word-break: break-word;
  margin-left: ${(props) => (props.align === "left" ? "-7%" : "0")};
  margin-right: ${(props) => (props.align === "right" ? "-7%" : "0")};
`;

const BottomSection = styled.div`
  display: flex;;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 93.2%;
  width: 80%;
  z-index: 1;
`;

const Title = styled.h1`
  font-size: 30px;
  font-weight: bold;
  color: black;
  white-space: nowrap;
  text-align: right;
  margin-bottom: 10px;
  align-self: flex-end;
  margin-right: -5%;
  span {
    color: #823B09; /* 강조 부분 색상 */
  }
`;

const BoxWrapper = styled.div`
  display: flex;
  align-items: center;
  //justify-content: center;
  margin-right: 10%;
  width: 100%;
`;

const SquirrelImage = styled.img`
  width: 90%;
  height: auto;
  //margin-right: 10px;
  margin-left: -10%;
`;

const RightSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const AcornText = styled.p`
  font-size: 18px;
  font-weight: bold;
  text-align: right;
  color: black;
  margin: 0;
  margin-bottom: 30%;
  margin-right: 20%;
  line-height: 26px;
  white-space: nowrap;
  span {
    color: #823B09; /* 강조 부분 색상 */
  }
`;

const GiftButton = styled.button`
  font-size: 18px;
  color: white;
  background-color: #823B09;
  border: none;
  margin-right: 20%;
  margin-bottom: 110%;
  padding: 12% 25%;
  border-radius: 10px;
  white-space: nowrap;
  cursor: pointer;
  font-family: inherit;
  &:hover {
    background-color: #5d2b06;
  }
`;

const ClipboardMessage = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(255, 255, 255, 0.85); /* 흰색 배경, 투명도 85% */
  color: black;
  padding: 40px 40px; /* 위아래 30px, 양옆 40px */
  border-radius: 10px;
  text-align: center;
  font-size: 18px; /* 글자 크기 증가 */
  line-height: 1.6; /* 줄 간격 조정 */
  z-index: 1000;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  white-space: nowrap; /* 줄 바꿈 방지 */
  span {
    color: #823B09; /* 강조 부분 색상 */
    font-weight: bold; /* 강조 텍스트 두껍게 */
  }
`;
