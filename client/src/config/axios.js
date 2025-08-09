import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:5000/api', // Replace with your backend API URL
    timeout: 10000, // Request timeout
    headers: {
        'Content-Type': 'application/json',
    },
});

export default instance;
