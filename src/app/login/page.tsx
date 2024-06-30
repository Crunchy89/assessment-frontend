"use client";
import HomeComponent from '@/components/HomeComponent';
import ReduxProvider from "@/store/redux-provider";
import LoginPage from '@/appPages/LoginPage';

const Page = () => {
    return (
        <ReduxProvider>
            <HomeComponent>
            <LoginPage/>
            </HomeComponent>
        </ReduxProvider>
    );
};

export default Page;