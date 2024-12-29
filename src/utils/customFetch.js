import axios from "axios";

const api = () => axios.create({
  // baseURL: `http://localhost:5000/api`,
  baseURL: `http://3.107.158.58:5000/api`,

  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${sessionStorage.getItem("token")}`,
  },
});

export default api;
