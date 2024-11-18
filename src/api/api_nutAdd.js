import axios from "axios";

const baseUrl = "https://photori.n-e.kr";

export const nutAdd = async (formData, urlRnd) => {
  const response = await axios.post(
    `${baseUrl}/dotoricollection/${urlRnd}/create`,
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );
  return response;
};
