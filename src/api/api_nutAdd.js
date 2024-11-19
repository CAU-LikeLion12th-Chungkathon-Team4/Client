import axios from "axios";

const baseUrl = "https://photori.n-e.kr";

export const nutAdd = async (formData, urlRnd) => {
  try {
    const response = await axios.post(
      `${baseUrl}/dotoricollection/${urlRnd}/create`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        timeout: 60000,
        maxContentLength: Infinity,
        maxBodyLength: Infinity,
      }
    );
    return response;
  } catch (error) {
    console.error(error);
  }
};

export const isFull = async (urlRnd) => {
  try {
    const response = await axios.get(
      `${baseUrl}/dotoricollection/${urlRnd}/isFull`
    );
    return response;
  } catch (error) {
    console.error(error);
  }
};
