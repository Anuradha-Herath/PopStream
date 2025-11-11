import axios, { AxiosInstance, AxiosError } from 'axios';
import { API_BASE_URL, API_KEY } from '../constants';

const api: AxiosInstance = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
});

// Add API key to all requests
api.interceptors.request.use((config) => {
  config.params = {
    ...config.params,
    api_key: API_KEY,
  };
  return config;
});

// Handle responses
api.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    console.error('API Error:', error.message);
    return Promise.reject(error);
  }
);

export default api;
