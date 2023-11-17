import axios from 'axios';

const baseURL = 'https://fepruebatecnicaculqi-backend-production.up.railway.app'; // Reemplaza con tu URL de la API

const httpClient = axios.create({
  baseURL,
});

httpClient.interceptors.request.use((config) => {
    const token = localStorage.getItem('token') || null;
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
    }
);

export default httpClient;