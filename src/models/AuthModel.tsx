"use client";
import { useState} from 'react';
import { useRouter } from 'next/navigation';
import { useAppDispatch } from '@/store';
import { login } from '@/store/authSlice';
import { AuthRequest } from '@/types';
import AuthService from '@/services/authService';

interface AuthAction {
    handleLogin: () => void;
    handleRegister: () => void;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const AuthModel = () => {
    const router = useRouter();
    const dispatch = useAppDispatch();
    const [payload, setPayload] = useState<AuthRequest>({email: '', password: ''});

    const handleLogin = () => {
        if (!payload.email || !payload.password) {
            console.error('Email and password are required');
            return;
        }
        AuthService.login(payload).then((response) => {
            dispatch(login(response));
            router.push('/');
        }).catch((error) => {
            console.error(error);
        }) ;
    }

    const handleRegister = () => {
        if (!payload.email || !payload.password) {
            console.error('Email and password are required');
            return;
        }
        AuthService.register(payload).then((response) => {
            console.log("Register success");
            router.push('/login');
        }).catch((error) => {
            console.error(error);
        }) ;
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setPayload({
            ...payload,
            [name]: value.trim(),
        });
    }
    const action: AuthAction = {
        handleLogin,
        handleRegister,
        handleChange,
    };
    return {
        payload,
        action
    };
};

export default AuthModel;