import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Level4Layout() {
    return (
        <>
            <header>
                <Navbar />
            </header>
            <main style={{ marginTop: "58px" }}>
                <Outlet />
            </main>
            <footer className="d-none d-md-block">
                <Footer />
            </footer>
        </>
    );
}
