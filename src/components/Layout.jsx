import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout() {
    return (
        <>
            <header>
                <Navbar />
            </header>
            <main style={{ marginTop: "58px" }}>
                <Outlet />
            </main>
            <footer className="fixed-bottom bg-light">
                <Footer />
            </footer>
        </>
    );
}
