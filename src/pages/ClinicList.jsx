import React, { useState } from "react";
import DataTable from "react-data-table-component";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function ClinicList() {
    const [startDate, setStartDate] = useState(new Date());

    const columns = [
        {
            name: "Clinic Name",
            selector: "clinicName",
            sortable: true,
        },
        {
            name: "Address",
            selector: "address",
            sortable: true,
        },
        {
            name: "Phone",
            selector: "phone",
            sortable: true,
        },
        {
            name: "Email",
            selector: "email",
            sortable: true,
        },
    ];

    const data = [
        {
            clinicName: "Clinic 1",
            address: "Address 1",
            phone: "Phone 1",
            email: "Email 1",
        },
        {
            clinicName: "Clinic 2",
            address: "Address 2",
            phone: "Phone 2",
            email: "Email 2",
        },
        {
            clinicName: "Clinic 3",
            address: "Address 3",
            phone: "Phone 3",
            email: "Email 3",
        },
    ];

    return (
        <div className="container pt-4">
            <div className="d-flex justify-content-between align-items-center">
                <p className="display-6">Clinic List</p>
                <div>
                    <ReactDatePicker
                        className="form-control"
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                    />
                </div>
            </div>
            <div className="card card-body">
                <DataTable
                    title={
                        <div className="d-flex justify-content-between">
                            <div className="input-group w-25">
                                <div className="input-group-text border-0 ps-0">
                                    <i className="fas fa-search"></i>
                                </div>
                                <input
                                    type="text"
                                    className="form-control bb-input"
                                    placeholder="Search title"
                                />
                            </div>
                        </div>
                    }
                    columns={columns}
                    data={data}
                    pagination
                    selectableRows
                />
            </div>
        </div>
    );
}
