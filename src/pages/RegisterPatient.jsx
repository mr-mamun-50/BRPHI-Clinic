import React from "react";
import { Link } from "react-router-dom";

export default function RegisterPatient() {
    return (
        <div className="container py-4 col-lg-8">
            <div className="mb-4 bg-white rounded-7 p-3 d-flex shadow-sm">
                <Link to="/" className="btn btn-light btn-floating me-2">
                    <i className="fas fa-arrow-left fa-lg"></i>
                </Link>
                <h5 className="my-auto">Register Patient</h5>
            </div>
            <div className="card card-body rounded-7 shadow-sm">
                <form action="">
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <div className="mb-3">
                                <label for="firstName">First Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="firstName"
                                />
                            </div>
                        </div>
                        <div className="col-12 col-md-6">
                            <div className="mb-3">
                                <label for="lastName">Last Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="lastName"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12 col-md-6">
                            <div className="mb-3">
                                <label htmlFor="fathersName">
                                    Father's Name
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="fathersName"
                                />
                            </div>
                        </div>
                        <div className="col-12 col-md-6">
                            <div className="mb-3">
                                <label for="mothersName">Mother's Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="mothersName"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12 col-md-6">
                            <div className="mb-3">
                                <label for="dateOfBirth">Date of Birth</label>
                                <input
                                    type="date"
                                    className="form-control"
                                    id="dateOfBirth"
                                />
                            </div>
                        </div>
                        <div className="col-12 col-md-6">
                            <div className="mb-3">
                                <label for="gender">Gender</label>
                                <select className="form-control">
                                    <option selected disabled>
                                        Select
                                    </option>
                                    <option value="">Male</option>
                                    <option value="">Female</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12 col-md-6">
                            <div className="mb-3">
                                <label for="phone">Phone</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="phone"
                                />
                            </div>
                        </div>
                        <div className="col-12 col-md-6">
                            <div className="mb-3">
                                <label htmlFor="nid">NID</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="nid"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="d-flex mt-2">
                        <button type="submit" className="btn btn-primary me-2">
                            <i class="fas fa-save me-1"></i> Save
                        </button>

                        <button type="reset" className="btn btn-secondary">
                            <i class="fas fa-undo me-1"></i> Reset
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
