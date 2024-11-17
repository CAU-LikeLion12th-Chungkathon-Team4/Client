import axios from 'axios';

const baseURL = `https://photori.n-e.kr`;

export const loginHandler = async (username, password) => {
  try {
    const response = await axios.post(`${baseURL}/login`, {
      username: username,
      password: password,
    });

    const { accessToken, refreshToken, urlRnd } = response.data;

        //토큰 저장
        localStorage.setItem("access", accessToken);
        localStorage.setItem("refresh", refreshToken);
    
        // 로그인 후 urlRnd 포함 페이지로 이동
    window.location.href = `/home/${urlRnd}`;

    return response.data;
  } catch (error) {
    if (error.response) {
      console.error("서버 요청 에러:", error.response.data);
      throw new Error(error.response.data.message);
    } else {
      console.error("네트워크 에러:", error);
      throw new Error("네트워크 연결 오류");
    }
  }
}