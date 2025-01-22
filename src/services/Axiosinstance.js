import axios from 'axios';

const url = import.meta.env.VITE_API_URL
// Create Axios instance with default settings
console.log(url);
const axiosInstance = axios.create({
  baseURL: 'http://192.168.2.2:90/api/v1/',  // Replace with your base API URL
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add interceptors if needed
axiosInstance.interceptors.request.use(
  (config) => {
    // Attach authorization token to request headers (if available)
    const token = localStorage.getItem('token');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default axiosInstance;