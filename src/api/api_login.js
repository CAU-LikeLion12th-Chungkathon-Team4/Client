import axios from "axios";
import { createBrowserHistory } from "history";

const CLIENT_ID = process.env.REACT_APP_GOOLE_CLIENT_ID
const REDIRECT_URI = "https://photori.netlify.app/oauth"
const REDIRECT_URI_LOCAL = "http://localhost:3000/oauth"
const google_login_uri = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI_LOCAL}&response_type=code&scope=email%20profile`

export const loginHandler = () => {
    window.location.href = google_login_uri;
}

export const handleOAuth = async () => {
    const history = createBrowserHistory();
    const code = new URL(window.location.href).searchParams.get("code");
    
    if (code) {
      try {
        const result = await axios.get(`https://saengchaein.r-e.kr/account/kakao/callback/?code=${code}`);
  
        localStorage.setItem("access", result.data.access_token); // 받아온 액세스 토큰을 로컬스토리지에 저장하여 관리
        localStorage.setItem("refresh", result.data.refresh_token); // 받아온 리프레시 토큰을 로컬스토리지에 저장하여 관리
        
        window.location.href = "/";
        
      } catch (error) {
        console.error("Error fetching OAuth data", error); // 에러 메세지 확인용
      }
    }
  };
  
  // OAuth 처리를 위해 페이지 로드 시 handleOAuth 호출
  document.addEventListener("DOMContentLoaded", () => {
    handleOAuth();
  });