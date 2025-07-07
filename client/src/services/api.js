import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:5000',
    // baseURL: 'http://192.168.1.5:5000',
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json'
    }
});

export default api;