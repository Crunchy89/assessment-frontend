"use client";
import HomeComponent from "@/components/HomeComponent";
import ReduxProvider from "@/store/redux-provider";
export default function Home() {
  return (
    <ReduxProvider>
      <HomeComponent>
        
      </HomeComponent>
    </ReduxProvider>
  );
}
