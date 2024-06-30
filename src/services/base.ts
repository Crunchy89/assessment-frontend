"use client";
import axios, { AxiosInstance } from 'axios';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

// Create an Axios instance with base URL from .env
const api: AxiosInstance = axios.create({
    baseURL: process.env.API_URL ?? "http://localhost:3000/",
});

export default api;