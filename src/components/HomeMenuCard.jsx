import React from "react";
import { Link } from "react-router-dom";

export default function HomeMenuCard({ icon, text, route }) {
    return (
        <div className="col-12 col-md-6 col-lg-3 mt-4 mt-lg-0">
            <div className="card card-body h-100 text-center rounded-9 py-5 glassy">
                <i
                    className={icon + " text-info"}
                    style={{ fontSize: "60px" }}
                ></i>
                <Link to={route}>
                    <h4 className="card-title mt-4 text-dark fw-bold">
                        {text}
                    </h4>
                </Link>
            </div>
        </div>
    );
}
