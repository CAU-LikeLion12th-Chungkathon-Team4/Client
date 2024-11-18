import axios from "axios";

const baseUrl = "https://photori.n-e.kr";

// 이거는 개별 도토리 오픈 이후에 열어보는 것
export const dotoriCollectionOpen = async (dotori_collection_id) => {
    try {
        const response = await axios.get(`${baseUrl}/dotoricollection/${dotori_collection_id}/open`);
        return response;
      } catch (error) {
        console.error(error);
        throw error;
      }
};

// 도토리 개별 사진 삭제
export const dotoriDelete = async (dotori_id) => {
  try {
    const accessToken = localStorage.getItem("access");
      const response = await axios.delete(`${baseUrl}/dotori/delete/${dotori_id}`,{
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      },);
      return response;
    } catch (error) {
      console.error(error);
      throw error;
    }
};

// 도토리 사진 반환
export const dotoriPictureList = async (dotori_collection_id) => {
  try {
      const response = await axios.get(`${baseUrl}/dotori/get/${dotori_collection_id}`);
      return response;
    } catch (error) {
      console.error(error);
      throw error;
    }
};