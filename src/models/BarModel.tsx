"use client"; // This directive ensures the component is rendered on the client
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useAppSelector } from "@/store/index";
import { setSidebarState } from '@/store/sidebarSlice';
import { logout } from '@/store/authSlice';
import { defaultUserMenu,defaultMenu } from '@/variables/menu';

interface BarAction {
    toggleSidebar: () => void;
    toggleUserMenu: () => void;
    toogleLogout: () => void;
}

const BarModel = () => {
    const dispatch = useDispatch();
    const [userMenu,setUserMenu] = useState<boolean>(false);

    const showSidebar = useAppSelector((state) => state.sidebar.isOpen);
    const isLoggedIn = useAppSelector((state) => state.auth.isLoggedIn);
    const user = useAppSelector((state) => state.auth.user);

    const toggleUserMenu = () => {
        setUserMenu(!userMenu);
    }

    const toggleSidebar = () => {
        dispatch(setSidebarState(!showSidebar)); // Toggle sidebar state
    };

    const toogleLogout = () => {
        dispatch(logout());
    }

    const action: BarAction = {
        toggleSidebar: toggleSidebar,
        toggleUserMenu: toggleUserMenu,
        toogleLogout: toogleLogout,
    };

    return {
        user,
        isLoggedIn,
        userMenu,
        showSidebar,
        defaultMenu,
        defaultUserMenu,
        action,
    };
};

export default BarModel;
