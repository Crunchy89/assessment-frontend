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
    token: string | null;
    isLoggedIn: boolean;
}