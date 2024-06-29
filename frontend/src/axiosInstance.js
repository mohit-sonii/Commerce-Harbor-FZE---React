import axios from "axios";

const api = axios.create({
     baseURL: process.env.NODE_ENV === 'production'
          ? 'https://mohit-sonii.github.io/Commerce-Harbor-FZE---MERN/'
          : 'http://localhost:8000/',
});

export default api;