import axios from "axios";

export const api = axios.create({
    baseURL: "http://localhost:3001",
    timeout: 8000,
});

// production: https://easy-contacts-svuu.onrender.com/
// local: http://localhost:3001