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
    <Logo src="/source/logoWithName.png" alt="Logo" />
    <DotoriSection>
      <DotoriImage src="/source/singleDotori.png" alt="Single Dotori" />
      <DotoriCount>{dotoriData.length}</DotoriCount>
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
`;