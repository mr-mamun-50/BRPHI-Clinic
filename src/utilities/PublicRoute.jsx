import React from "react";
import { Navigate } from "react-router-dom";

export default function PublicRoute({ children }) {
    let isAuth = sessionStorage.getItem("auth_token") ||
        localStorage.getItem("auth_token")
        ? true
        : false;

    return isAuth ? <Navigate to="/" /> : children;
}
