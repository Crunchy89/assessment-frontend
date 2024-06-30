import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useAppSelector } from "@/store/store";
import { setSidebarState } from '@/store/sidebarSlice';
import { defaultUserMenu,defaultMenu } from '@/variables/menu';

interface BarAction {
    toggleSidebar: () => void;
    toggleUserMenu: () => void;
}

const BarModel = () => {
    const dispatch = useDispatch();
    const [userMenu,setUserMenu] = useState<boolean>(false);

    const toggleUserMenu = () => {
        setUserMenu(!userMenu);
    }

    // Correct usage of useSelector with RootState
    const showSidebar = useAppSelector((state) => state.sidebar.isOpen);
    const isLoggedIn = useAppSelector((state) => state.auth.isLoggedIn);

    const toggleSidebar = () => {
        dispatch(setSidebarState(!showSidebar)); // Toggle sidebar state
    };

    const action: BarAction = {
        toggleSidebar: toggleSidebar,
        toggleUserMenu: toggleUserMenu,
    };

    return {
        isLoggedIn,
        userMenu,
        showSidebar,
        defaultMenu,
        defaultUserMenu,
        action,
    };
};

export default BarModel;
