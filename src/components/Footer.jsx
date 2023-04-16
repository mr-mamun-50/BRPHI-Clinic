import React from "react";
import logo from "../assets/images/BRPHI.png";
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <div className="bg-link text-center text-lg-start fixed-bottom bg-light">
            <div className="d-flex justify-content-between align-items-center p-3">
                <img src={logo} alt="BRPHI" style={{ height: "40px" }} />
                <small>
                    {"©" + new Date().getFullYear() + " Copyright: "}
                    <a href="https://gramgp.com/">gramgp.com</a>
                </small>
                <small>
                    <Link className="text-muted">Feedback</Link>
                </small>
            </div>
        </div>
    );
}
