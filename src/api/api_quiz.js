import axios from "axios";

const baseUrl = "https://photori.n-e.kr";

// 퀴즈 정보 가져오기
export const getQuiz = async (dotori_collection_id) => {
  try {
    const accessToken = localStorage.getItem("access");

    //console.log(accessToken)
    const response = await axios.get(
      `${baseUrl}/dotoricollection/${dotori_collection_id}/quiz`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    console.log(response.data)
    return response;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const replyQuiz = async (dotori_collection_id, reply) => {
  try {
    const accessToken = localStorage.getItem("access");
    console.log(accessToken)
    const response = await axios.put(
        `${baseUrl}/dotoricollection/${dotori_collection_id}/reply`,
        { reply }, // 요청 데이터
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
  
      return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
