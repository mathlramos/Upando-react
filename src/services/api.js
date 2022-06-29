import axios from "axios";

const api = axios.create({
  baseURL: "https://upando-api.herokuapp.com",
});

export default api;
