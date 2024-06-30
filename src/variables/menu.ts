
import { MenuItem } from "@/types"
export const defaultMenu: MenuItem[] = [
    {
        id: 1,
        title: "Home",
        link: "/",
    },
    {
        id: 2,
        title: "About",
        link: "#",
    },
    {
        id: 3,
        title: "Contact",
        link: "#",
    },
    {
        id: 4,
        title: "Services",
        link: "#",
    }
]
export const profileMenu: MenuItem[] = [
    {
        id: 2,
        title: "Profile",
        link: "/profile",
    },
    {
        id: 3,
        title: "Update Profile",
        link: "/update/password",
    }
]
export const defaultUserMenu: MenuItem[] = [
    {
        id: 1,
        title: "Your Profile",
        link: "/profile",
    },
    {
        id: 2,
        title: "Update Profile",
        link: "/profile/password",
    }
]