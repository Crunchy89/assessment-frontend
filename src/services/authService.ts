"use client";
import api from './base';
import { AuthRequest, LoginResponse, RegisterResponse, PasswordUpdateRequest, User } from '@/types';


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

    public async changePassword(request: { oldPassword: string, retypePassword: string, newPassword: string, token: string | null, user: User | null }): Promise<User> {
        const { oldPassword, retypePassword, newPassword, token, user } = request;
        if (!token || !user) throw new Error("Token and user are required");
        const payload = {
            oldPassword: oldPassword,
            retypePassword: retypePassword,
            newPassword: newPassword
        }
        try {
            const response = await api.put(`/users/password/${user?._id}`, payload, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            return response.data;
        } catch (error: any) {
            throw error.response.data;
        }
    }
    public async changeName(request: { name: string, token: string | null, user: User | null }): Promise<User> {
        const { name, token, user } = request;
        if (!token || !user) throw new Error("Token and user are required");
        try {
            const response = await api.put(`/users/name/${user?._id}`, { name: name }, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            return response.data;
        } catch (error: any) {
            throw error.response.data;
        }
    }

}

export default new AuthService();
