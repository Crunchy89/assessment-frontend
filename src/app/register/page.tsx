"use client";
import ReduxProvider from "@/store/redux-provider";
import HomeComponent from "@/components/HomeComponent";
import RegisterPage from "@/pages/RegisterPage";

const Page = () => {
    return (
    <ReduxProvider>
        <HomeComponent>
            <RegisterPage/>
        </HomeComponent>
    </ReduxProvider>
    );
};

export default Page;