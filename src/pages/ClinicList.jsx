import React, { useState } from "react";
import DataTable from "react-data-table-component";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function ClinicList() {
    const [startDate, setStartDate] = useState(new Date());

    const columns = [
        {
            name: "Patient Name",
            selector: "patientName",
            sortable: true,
        },
        {
            name: "EMR no.",
            selector: "emrNo",
            sortable: true,
        },
        {
            name: "Gender",
            selector: "gender",
            sortable: true,
        },
        {
            name: "Date of Birth",
            selector: "dob",
            sortable: true,
        },
        {
            name: "Reason",
            selector: "reason",
            sortable: true,
        },
        {
            name: "Action",
            button: true,
            cell: (row) => (
                <button className="btn btn-secondary btn-sm px-2">
                    <i className="fas fa-eye"></i>
                </button>
            ),
        },
    ];

    const data = [
        {
            patientName: "John Doe",
            emrNo: "123456",
            gender: "Male",
            dob: "01/01/1990",
            reason: "Consultation",
        },
        {
            patientName: "Hannah Doe",
            emrNo: "123457",
            gender: "Female",
            dob: "01/01/1990",
            reason: "Consultation",
        },
        {
            patientName: "Mr. Doe",
            emrNo: "123456",
            gender: "Male",
            dob: "01/01/1990",
            reason: "Consultation",
        },
    ];

    return (
        <div className="container pt-4">
            <div className="m-2">
                <p className="display-6">Clinic List</p>
            </div>
            <div className="d-md-flex">
                <div className="m-2">
                    <div className="card pt-2 ps-2 pe-2 shadow-sm">
                        <ReactDatePicker
                            selected={startDate}
                            onChange={(date) => setStartDate(date)}
                            inline
                        />
                    </div>
                </div>
                <div className="w-100 m-2">
                    <div className="card card-body shadow-sm">
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
            </div>
        </div>
    );
}
