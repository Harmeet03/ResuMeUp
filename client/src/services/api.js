import axios from 'axios'

const api = axios.create({
    // baseURL: 'http://localhost:5000',
    baseURL: 'https://resumeup-7o8o.onrender.com/',
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json'
    }
});

export default api;