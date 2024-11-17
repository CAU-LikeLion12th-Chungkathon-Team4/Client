// api/api_home.js
import axios from "axios";

const BASE_URL = "https://photori.n-e.kr";
const USER_URL = `${BASE_URL}/user`;

const TEMP_ACCESS_TOKEN = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJpYXQiOjE3MzE4MDY2NjYsImV4cCI6MTczMTgwNjcyNiwidXNlcm5hbWUiOiJjaGVycnlubmlpaTIifQ.L97g9EFuAqYoQw4CkoE6-bMevqVx1jP1m8pjdlKOSb9KJEY5_-EYvlEJI2sQaulGOGW_3jGL5QOUF13B_n0gGg";

export const fetchDotoriCollection = async (urlRnd) => {
  try {
    const response = await axios.get(`${BASE_URL}/dotoricollection/${urlRnd}`);
    return response.data;
  } catch (error) {
    console.error("Failed to fetch dotori collection:", error);
    throw error;
  }
};

export const fetchUserData = async (accessToken) => {
    try {
      const response = await axios.get(USER_URL, {
        headers: {
          //Authorization: `Bearer ${accessToken}`,
          Authorization: `Bearer ${TEMP_ACCESS_TOKEN}`, // 하드코딩된 accessToken 사용
        },
      });
  
      const userData = response.data;
      const squirrelImage = `../../source/squ/${userData.squirrelType}Left.png`;
  
      return {
        nickname: userData.nickname,
        squirrelImage,
        urlRnd: userData.urlRnd, // urlRnd 추가
      };
    } catch (error) {
      console.error("Failed to fetch user data:", error);
      throw error;
    }
  };
  
