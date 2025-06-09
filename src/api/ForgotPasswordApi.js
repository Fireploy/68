import axios from "axios";
const API_URL = import.meta.env.VITE_URL_BACKEND;

//const API_URL = "https://fitmanageback-production.up.railway.app/auth/forgot-password";

export const solicitarRecuperacion = async (dni, email) => {
  const res = await axios.post(`${API_URL}/auth/forgot-password`, { dni, email });
  return res.data;
};
