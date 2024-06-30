"use client";
import { useState, FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import { useAppDispatch } from '@/store';
import { updateUser } from '@/store/authSlice';
import { PasswordUpdateRequest } from '@/types';
import { useAppSelector } from "@/store/index";
import AuthService from '@/services/authService';

interface ProfileAction {
    handleChangePassword: (e:FormEvent<HTMLFormElement>) => void;
    handlePasswordChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleChangeName: (e:FormEvent<HTMLFormElement>) => void;
    handleNameChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const ProfileModel = () => {

    const router = useRouter();
    const isLoggedIn = useAppSelector((state) => state.auth.isLoggedIn);
    if(!isLoggedIn) router.push('/');
    const dispatch = useAppDispatch();
    const [payloadPasswordChange, setPayloadPasswordChange] = useState<PasswordUpdateRequest>({oldPassword: '', retypePassword: '',newPassword:''});
    const [payloadNameChange, setPayloadNameChange] = useState<string>("");

    const user = useAppSelector((state) => state.auth.user);
    const token = useAppSelector((state) => state.auth.access_token);
    const handleChangePassword = (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault(); 
        if(!user || !token) return;
        if (payloadPasswordChange.oldPassword === "" || payloadPasswordChange.newPassword === "" || payloadPasswordChange.retypePassword === "") {
            console.error('All fields are required');
            return;
        }
        AuthService.changePassword({
            user:user,
            token:token,
            oldPassword:payloadPasswordChange.oldPassword,
            retypePassword:payloadPasswordChange.retypePassword,
            newPassword:payloadPasswordChange.newPassword
        }).then((response) => {
            dispatch(updateUser(response));
            console.log("Password changed");
        }).catch((error) => {
            console.error(error);
        }) ;
    };

    const handleChangeName = (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!payloadNameChange) {
            console.error('Name is required');
            return;
        }
        AuthService.changeName({name:payloadNameChange,token:token,user:user}).then((response) => {
            console.log("Name changed");
            dispatch(updateUser(response));
        }).catch((error) => {
            console.error(error);
        }) ;
    }

    const handlePasswordChange= (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setPayloadPasswordChange({
            ...payloadPasswordChange,
            [name]: value.trim(),
        });
    }

    const handleNameChange= (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        setPayloadNameChange(value);
    }

    const action: ProfileAction = {
        handleChangePassword,
        handlePasswordChange,
        handleChangeName,
        handleNameChange,
    };

    return {
        isLoggedIn,
        user,
        payloadPasswordChange,
        payloadNameChange,
        action,
    };
};

export default ProfileModel;