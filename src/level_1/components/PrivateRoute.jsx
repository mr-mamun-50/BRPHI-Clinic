import React from "react";
import { Navigate } from "react-router-dom";

export default function Level1PrivateRoute({ children }) {
	let isAuth = sessionStorage.getItem("level_1_token") ||
		localStorage.getItem("level_1_token")
		? true
		: false;

	return isAuth ? children : <Navigate to="/login" />;
}
