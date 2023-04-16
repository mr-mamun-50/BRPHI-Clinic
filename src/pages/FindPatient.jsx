import React from "react";

export default function FindPatient() {
    return (
        <div className="container py-5">
            <div className="text-center">
                <p className="display-6 mb-5">Find Patient</p>

                {/* Search form group */}
                <div className="d-flex justify-content-center">
                    <div className="col-12 col-md-8 col-lg-6">
                        <div className="input-group mb-3">
                            <input
                                type="text"
                                className="form-control p-4"
                                placeholder="Search by name or ID"
                                aria-label="Search by name or ID"
                                aria-describedby="button-addon2"
                                style={{ borderRadius: "50px 0 0 50px" }}
                            />
                            <button
                                className="btn btn-primary"
                                type="button"
                                id="button-addon2"
                                style={{ borderRadius: "0 50px 50px 0" }}
                            >
                                <i class="fas fa-search me-1"></i> Search
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
