import axios from 'axios'

const API = axios.create({
    baseURL: "https://bloggersden-backend.onrender.com"
});

export default API;