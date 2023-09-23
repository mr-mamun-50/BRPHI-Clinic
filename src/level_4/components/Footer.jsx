import React from "react";
import logo from "../../assets/images/BRPHI.png";
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <div className="fixed-bottom bg-white">
            <div className="row py-2 align-items-center">
                <div className="col">
                    <small className="ms-4">
                        {"©" + new Date().getFullYear() + " Copyright: "}
                        <a href="https://gramgp.com/">gramgp.com</a>
                    </small>
                </div>
                <div className="col text-center">
                    <img src={logo} alt="BRPHI" style={{ height: "40px" }} />
                </div>
                <div className="col text-end">
                    <small className="me-4">
                        <Link className="text-muted">Feedback</Link>
                    </small>
                </div>
            </div>
        </div>
    );
}
