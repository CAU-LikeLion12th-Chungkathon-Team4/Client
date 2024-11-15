import axios from "axios";

const baseUrl = "https://photori.n-e.kr";

export const join = async (username, password, nickname, squirrel_type) => {
  try {
    const response = await axios.post(`${baseUrl}/join`, {
      username: username,
      password: password,
      nickname: nickname,
      squirrel_type: squirrel_type,
    });
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
};
