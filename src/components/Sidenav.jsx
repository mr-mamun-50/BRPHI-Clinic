import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

export default function SideNav() {
    const [showStudySubMenu, setShowStudySubMenu] = useState(false);

    const toggleStudySubMenu = () => {
        setShowStudySubMenu(!showStudySubMenu);
    };

    return (
        <nav id="sidebarMenu" className="collapse d-lg-block sidebar collapse">
            <div className="position-sticky">
                <div className="list-group list-group-flush mt-4">
                    <NavLink to="/">
                        <span className="list-group-item list-group-item-action py-2 ripple">
                            <i className="fas fa-tachometer-alt fa-fw me-3"></i> <span>Dashboard</span>
                        </span>
                    </NavLink>
                    <NavLink to="/exams">
                        <span className="list-group-item list-group-item-action py-2 ripple">
                            <i className="fas fa-table-list fa-fw me-3"></i> <span>Exam Management</span>
                        </span>
                    </NavLink>

                    <span className="list-group-item list-group-item-action py-2" onClick={toggleStudySubMenu}>
                        <i className="fas fa-book-open-reader fa-fw me-3"></i>{" "}
                        <span>Study Section</span>
                        <i className={`fas ${showStudySubMenu ? "fa-angle-down" : "fa-angle-right fa-beat-fade"} float-end mt-1`}></i>
                    </span>
                    <div className={`collapse ${showStudySubMenu ? "show" : ""} list-group-item list-group-item-action p-0 mt-0`}>
                        <NavLink to="/videos" className="list-group-item ps-5">
                            <span>
                                <i className="fas fa-circle-play fa-fw me-2"></i>
                                <span>All Video</span>
                            </span>
                        </NavLink>
                        <NavLink to="/pdf" className="list-group-item ps-5">
                            <span>
                                <i className="fas fa-file-pdf fa-fw me-2"></i>
                                <span>All PDF</span>
                            </span>
                        </NavLink>
                        <NavLink to="/study_groups" className="list-group-item ps-5">
                            <span>
                                <i className="fas fa-users-line fa-fw me-2"></i>
                                <span>Study Groups</span>
                            </span>
                        </NavLink>
                    </div>

                    <NavLink to="/exam-categories">
                        <span className="list-group-item list-group-item-action py-2 ripple">
                            <i className="fas fa-layer-group fa-fw me-3"></i> <span>All Sections</span>
                        </span>
                    </NavLink>
                </div>
            </div>
        </nav >
    )
}
