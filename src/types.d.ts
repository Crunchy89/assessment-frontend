export interface User {
    _id: string;
    name: string;
    email: string;
    password: string;
    createdAt: Date;
    updatedAt: Date;
    isDeleted: boolean;
}
export interface MenuItem {
    id: number;
    title: string;
    link: string;
}

export interface RootState {
    sidebar: SidebarState;
}

export interface SidebarState {
    isOpen: boolean;
}

export interface AuthState {
    user: User | null;
    access_token: string | null;
    isLoggedIn: boolean;
}

export interface AuthRequest {
    email: string;
    password: string;
}

export interface LoginResponse {
    user: User;
    access_token: string;
}

export interface RegisterResponse {
    user: User;
}