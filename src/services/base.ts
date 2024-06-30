"use client";
import axios, { AxiosInstance } from 'axios';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

// Create an Axios instance with base URL from .env
const api: AxiosInstance = axios.create({
    baseURL: "https://assessment-backend-production-7098.up.railway.app",
});

export default api;