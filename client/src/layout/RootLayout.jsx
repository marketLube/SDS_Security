import React from "react";
import { Footer } from "../components/ui/footer/Footer";
import { Header } from "../components/ui/Header";
import { Outlet } from "react-router-dom";

export const RootLayout = () => {
    return (
        <div className="flex flex-col ">
            <Header />
            <Outlet/>
            <Footer />
        </div>
    );
};
