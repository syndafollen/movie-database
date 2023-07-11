import axios from "axios";
import { API_URL } from "./constants";

export const refreshAccessToken = async () => {
  try {
    const refreshToken = localStorage.getItem("refreshToken");
    const response = await axios.post(`${API_URL}/token`, {
      token: refreshToken,
    });
    const { accessToken } = response.data;
    localStorage.setItem("accessToken", accessToken);
  } catch (error) {
    console.log(error);
  }
};
