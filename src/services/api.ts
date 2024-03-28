import axios from "axios";

export const api = axios.create({
  baseURL: "https://investment-fullstack.onrender.com",
  // baseURL: "http://localhost:3001",
  timeout: 8000,
});

// production: https://investment-fullstack.onrender.com
// if local: http://localhost:3001
