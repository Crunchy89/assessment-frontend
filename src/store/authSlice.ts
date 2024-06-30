import { createSlice } from "@reduxjs/toolkit";
import { AuthState } from "@/types";

const initialState: AuthState = {
    token: typeof localStorage !== 'undefined' ? localStorage.getItem('token') : null,
    isLoggedIn: typeof localStorage !== 'undefined' ? !!localStorage.getItem('token') : false,
};


export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (state, action) => {
            const token = action.payload;
            if (typeof localStorage !== 'undefined') {
                localStorage.setItem('token', token);
            }
            state.token = token;
            state.isLoggedIn = true;
        },
        logout: (state) => {
            if (typeof localStorage !== 'undefined') {
                localStorage.removeItem('token');
            }
            state.token = null;
            state.isLoggedIn = false;
        },
    },
});

export const { login, logout } = authSlice.actions;
export const authReducer = authSlice.reducer;
