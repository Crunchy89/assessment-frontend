"use client";
import api from './base';
import { AuthRequest, LoginResponse, RegisterResponse } from '@/types';

class AuthService {
    public async login(request: AuthRequest): Promise<LoginResponse> {
        try {
            const response = await api.post("/auth/login", request);
            return response.data;
        } catch (error: any) {
            throw error.response.data;
        }
    }
    public async register(request: AuthRequest): Promise<RegisterResponse> {
        try {
            const response = await api.post("/users", request);
            return response.data;
        } catch (error: any) {
            throw error.response.data;
        }
    }

}

export default new AuthService();
