import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AuthState, LoginResponse, User } from "@/types";

const initialState: AuthState = {
    user: {} as User,
    access_token: "",
    isLoggedIn: false,
};


export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action: PayloadAction<LoginResponse>) => {
            const { access_token, user } = action.payload;
            state.access_token = access_token;
            state.user = user; // Updating state with user information
            state.isLoggedIn = true;
        },

        logout: (state) => {
            state.access_token = null;
            state.user = null; // Clearing user information from state
            state.isLoggedIn = false;
        },
        // New action for updating user information
        updateUser: (state, action: PayloadAction<User>) => {
            const user = action.payload;
            state.user = user; // Updating user information in state
        },

        setAuthState: (state, action: PayloadAction<boolean>) => {
            state.isLoggedIn = action.payload;
        }
    },
});

export const { login, logout, updateUser, setAuthState } = authSlice.actions;

export const authReducer = authSlice.reducer;