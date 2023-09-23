import React from "react";
import { Navigate } from "react-router-dom";

export default function Level4PrivateRoute({ children }) {
	let isAuth = sessionStorage.getItem("level_4_token") ||
		localStorage.getItem("level_4_token")
		? true
		: false;

	return isAuth ? children : <Navigate to="/login" />;
}
