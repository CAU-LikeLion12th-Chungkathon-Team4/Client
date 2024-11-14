import axios from "axios";

const CLIENT_ID = process.env.REACT_APP_GOOLE_CLIENT_ID // 환경변수로 관리
const REDIRECT_URI = "https://photori.netlify.app/oauth" // 배포서비스
//const REDIRECT_URI_LOCAL = "http://localhost:3000/oauth" // 로컬환경
// 구글측 인가코드 요청 uri
const google_login_uri = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code&scope=email%20profile`

// 로그인 버튼에 연결할 함수 - 인가코드 요청
export const loginHandler = () => {
    window.location.href = google_login_uri;
}

// 인가코드를 uri에서 파싱해서 백에 넘기고 액세스 토큰 가져오는 함수
export const handleOAuth = async () => {
    //const history = createBrowserHistory();
    const code = new URL(window.location.href).searchParams.get("code");
    
    if (code) {
      try {

        // const result = await axios.get("https://photori.n-e.kr/test")
        // console.log(result.data)

        const result = await axios.post(`https://photori.n-e.kr/login?code=${code}`);
        console.log(result.data)
  
        localStorage.setItem("access", result.data.access_token); // 받아온 액세스 토큰을 로컬스토리지에 저장하여 관리
        localStorage.setItem("refresh", result.data.refresh_token); // 받아온 리프레시 토큰을 로컬스토리지에 저장하여 관리
        
        window.location.href = "/home";
        
      } catch (error) {
        console.error("Error fetching OAuth data", error); // 에러 메세지 확인용
      }
    }
  };
  
  // OAuth 처리를 위해 페이지 로드 시 handleOAuth 호출
  // for 새로고침 - 새로고침하면서 handleOAuth() 함수 호출
  document.addEventListener("DOMContentLoaded", () => {
    handleOAuth();
  });