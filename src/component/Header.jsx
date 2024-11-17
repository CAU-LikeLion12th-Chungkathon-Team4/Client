import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { fetchDotoriCollection , fetchUserData } from "../api/api_home.js";

const Header = () => {
    const [dotoriData, setDotoriData] = useState([]);
    const [userData, setUserData] = useState({
        nickname: "사용자",
        squirrelImage: "../../../source/squ/defaultSquLeft.png",
        isOwner: false, // isOwner 초기값 추가
      });

  useEffect(() => {
    const fetchData = async () => {

      const accessToken = localStorage.getItem("access"); // 로컬 스토리지에서 액세스 토큰 가져오기
  
      if (!accessToken) {
        console.error("No access token found!");
        return;
      }
      
      try {
        // 사용자 데이터 가져오기
        const user = await fetchUserData(accessToken);
        //const user = await fetchUserData(); // accessToken 전달하지 않음
        setUserData(user);
  
        // 도토리 데이터 가져오기
        const dotoriData = await fetchDotoriCollection(user.urlRnd); // 사용자 데이터에서 urlRnd 가져오기
        setDotoriData(dotoriData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
  
    fetchData();
  }, []);

return (
    <TopBar>
        <Logo onClick={() => window.location.href = '/home'} src="/source/logoWithName.png" alt="Logo" />
        <DotoriSection>
            <DotoriImage src="/source/singleDotori.png" alt="Single Dotori" />
            <DotoriCount>{dotoriData.length}</DotoriCount>
            <MypageBtn onClick={() => window.location.href = '/mypage'}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M16.6401 22H7.36009C6.34927 21.9633 5.40766 21.477 4.79244 20.6742C4.17722 19.8713 3.95266 18.8356 4.18009 17.85L4.42009 16.71C4.69613 15.1668 6.02272 14.0327 7.59009 14H16.4101C17.9775 14.0327 19.3041 15.1668 19.5801 16.71L19.8201 17.85C20.0475 18.8356 19.823 19.8713 19.2077 20.6742C18.5925 21.477 17.6509 21.9633 16.6401 22Z" fill="#823B09"/>
                    <path d="M12.5001 12H11.5001C9.29096 12 7.50009 10.2092 7.50009 8.00001V5.36001C7.49743 4.46807 7.85057 3.61189 8.48127 2.98119C9.11197 2.35049 9.96815 1.99735 10.8601 2.00001H13.1401C14.032 1.99735 14.8882 2.35049 15.5189 2.98119C16.1496 3.61189 16.5028 4.46807 16.5001 5.36001V8.00001C16.5001 9.06088 16.0787 10.0783 15.3285 10.8284C14.5784 11.5786 13.561 12 12.5001 12Z" fill="#823B09"/>
                </svg>
            </MypageBtn>
        </DotoriSection>
    </TopBar>
)
}

export default Header


const TopBar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 20px;
  //box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 10;
`;

const Logo = styled.img`
  height: 30px;
`;

const DotoriSection = styled.div`
  display: flex;
  align-items: center;
  padding-right: 40px;
`;

const DotoriImage = styled.img`
  height: 20px;
  margin-right: 5px;
`;

const DotoriCount = styled.span`
  font-size: 16px;
  color: #333;
  margin-right: 20px;
`;
const MypageBtn = styled.button`
background-color: transparent;
border: none;
display: flex;
`;