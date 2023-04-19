import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/GramGP.png";
import vectorImg from "../assets/images/young-doctors.png";
import getPlayStore from "../assets/images/app-store-badge-google-play.png";
import getAppleStore from "../assets/images/Download-On-The-App-Store.png";
import brphiLogo from "../assets/images/BRPHI.png";
import be2winLogo from "../assets/images/be2win.png";

export default function Login() {
    return (
        <div className="bg-light">
            <div className="container bg-light col-lg-9">
                <div className="d-md-flex justify-content-between">
                    <div className="d-flex align-items-center py-2">
                        <div
                            className="shadow"
                            style={{ width: "150px", borderRadius: "50px" }}
                        >
                            <img
                                className="img-fluid"
                                src={logo}
                                alt="GramGP"
                            />
                        </div>
                        <div className="ms-4">
                            <h3 className="text-primary mt-3 fw-bold mb-0">
                                GramGP
                            </h3>
                            <p>A social service organization</p>
                        </div>
                    </div>

                    <div className="d-flex align-items-center justify-content-end mb-3">
                        <Link to={"/"} className="btn btn-primary ms-2">
                            <i className="fas fa-home me-2"></i>
                            Home
                        </Link>
                    </div>
                </div>

                <div className="row mt-3">
                    <div className="col-md-6 p-5 d-none d-md-block">
                        <div className="p-3">
                            <img className="img-fluid" src={vectorImg} alt="" />
                        </div>

                        <div className="d-flex justify-content-center mt-5">
                            <Link className="mx-2 shadow">
                                <img
                                    src={getPlayStore}
                                    alt=""
                                    style={{ height: "50px" }}
                                />
                            </Link>
                            <Link className="mx-2 shadow">
                                <img
                                    src={getAppleStore}
                                    alt=""
                                    style={{ height: "50px" }}
                                />
                            </Link>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card px-2 px-lg-4 py-3 rounded-8 shadow-lg">
                            <div className="card-header">
                                <h2>Login</h2>
                                <p>Welcome to BRPHI</p>
                            </div>
                            <div className="card-body">
                                <form action="">
                                    <div className="mb-3">
                                        <label
                                            for="email"
                                            className="form-label"
                                        >
                                            Username / Email
                                        </label>
                                        <input
                                            type="email"
                                            className="form-control"
                                            id="email"
                                            name="email"
                                            aria-describedby="emailHelp"
                                        />
                                    </div>

                                    <div className="mb-3">
                                        <label
                                            for="password"
                                            className="form-label"
                                        >
                                            Password
                                        </label>
                                        <input
                                            type="password"
                                            className="form-control"
                                            id="password"
                                            name="password"
                                        />
                                    </div>

                                    <div className="mb-4">
                                        <label
                                            for="select-clinic"
                                            className="form-label"
                                        >
                                            Select Clinic
                                        </label>
                                        <select
                                            className="form-select"
                                            id="select-clinic"
                                            name="clinic"
                                        >
                                            <option selected disabled>
                                                Select Clinic
                                            </option>
                                            <option value="1">
                                                A Rob & Azizun Medical Center
                                                ,Jogonnathpur
                                            </option>
                                            <option value="2">
                                                Hazi Yousuf Miah Medical
                                                Center,Bishwanath
                                            </option>
                                            <option value="3">
                                                Khan Family Clinic,Beanibazar
                                            </option>
                                        </select>
                                    </div>

                                    <div className="mb-3 form-check">
                                        <input
                                            type="checkbox"
                                            className="form-check-input"
                                            id="remember_me"
                                            name="remember"
                                        />
                                        <label
                                            className="form-check-label"
                                            for="remember_me"
                                        >
                                            Remember me
                                        </label>
                                    </div>

                                    <div className="d-flex justify-content-between pt-2">
                                        <button
                                            type="button"
                                            className="btn btn-link px-0 forgetPassBtn"
                                        >
                                            Forgot your password?
                                        </button>

                                        <button
                                            type="submit"
                                            className="btn btn-primary "
                                        >
                                            <div className="d-flex">
                                                Login
                                                <i className="fas fa-sign-in-alt mt-1 ms-2"></i>
                                            </div>
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="d-flex justify-content-center mt-5 d-block d-md-none">
                    <Link className="mx-2 shadow">
                        <img
                            src={getPlayStore}
                            alt=""
                            style={{ height: "50px" }}
                        />
                    </Link>
                    <Link className="mx-2 shadow">
                        <img
                            src={getAppleStore}
                            alt=""
                            style={{ height: "50px" }}
                        />
                    </Link>
                </div>
            </div>

            <footer className="py-3 mt-5">
                <div className="container">
                    <div className="d-flex justify-content-center align-items-end">
                        <img
                            src={brphiLogo}
                            alt=""
                            style={{ height: "45px" }}
                        />
                        <img
                            className="ms-4"
                            src={be2winLogo}
                            alt=""
                            style={{ height: "40px" }}
                        />
                    </div>
                    <div className="d-md-flex justify-content-center small mt-3 text-center">
                        <div className="text-muted">
                            &copy; {new Date().getFullYear()}. Developed by{" "}
                            <Link
                                to="https://github.com/mr-mamun-50"
                                target="_blank"
                            >
                                Mamunur Rashid Mamun
                            </Link>
                        </div>
                        <div className="ms-1">
                            &middot; <Link>Privacy Policy</Link> &middot;{" "}
                            <Link>Terms &amp; Conditions</Link>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
