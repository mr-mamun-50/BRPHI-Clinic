import React, { useState } from 'react'
import { Toolbar } from "@mui/material";
import logo from '../../assets/images/GramGP.png';
import { NavLink } from 'react-router-dom';
// import { useTheme } from '@emotion/react';

export default function Level1SideNav({ onClose }) {
  const [showDemoSubMenu, setShowDemoSubMenu] = useState(false);

  return (
    <div>
      {/* navbar */}
      <nav id="sidebarMenu" className="collapse d-block sidebar">
        <Toolbar className='d-flex align-items-center justify-content-between pt-2'>
          <img className='bg-light rounded-9' src={logo} alt="logo" style={{ height: '45px' }} />

          {/* Close button */}
          <button className='btn btn-floating text-light d-block d-sm-none'
            onClick={onClose} style={{ background: '#787a7b' }}>
            <i className="fas fa-close fa-lg"></i>
          </button>
          {/* Fullscreen button */}
          <button className="btn btn-floating btn-sm text-light d-none d-sm-block" onClick={e => {
            e.preventDefault()
            document.fullscreenElement ?
              document.exitFullscreen()
              : document.documentElement.requestFullscreen()
          }} style={{ background: '#787a7b' }}>
            <i className="fas fa-up-right-and-down-left-from-center fa-lg"></i></button>
        </Toolbar>

        <div className="position-sticky">
          <div className="list-group list-group-flush mt-4">
            <NavLink to="/level_1" end>
              <span className="list-group-item list-group-item-action py-2 ripple">
                <i className="fas fa-tachometer-alt fa-fw me-3"></i> <span>Dashboard</span>
              </span>
            </NavLink>
            <NavLink to="/level_1/patients">
              <span className="list-group-item list-group-item-action py-2 ripple">
                <i className="fas fa-bed fa-fw me-3"></i> <span>Patients</span>
              </span>
            </NavLink>

            <hr className='my-1 text-light' />

            <span className="list-group-item list-group-item-action py-2" onClick={() => setShowDemoSubMenu(!showDemoSubMenu)} >
              <i className="fas fa-hospital-user fa-fw me-3"></i>{" "}
              <span>Clinical</span>
              <i className={`fas ${showDemoSubMenu ? "fa-angle-down" : "fa-angle-right"} float-end mt-1`}></i>
            </span>
            <div className={`${showDemoSubMenu ? "show" : "collapse"} glassy`}>
              <NavLink to="/level_1/health_professionals" className="list-group-item">
                <span>
                  <i className="fas fa-user-tie fa-fw me-3"></i>
                  <span>Health Professionals</span>
                </span>
              </NavLink>

              <NavLink to="/level_1/assign_doctors" className="list-group-item">
                <span>
                  <i className="fas fa-ils fa-fw me-3"></i>
                  <span>Assign Doctor</span>
                </span>
              </NavLink>

              <NavLink to="/level_1/clinics" className="list-group-item">
                <span>
                  <i className="fas fa-layer-group fa-fw me-3"></i>
                  <span>Clinics</span>
                </span>
              </NavLink>
            </div>
          </div>
        </div>
      </nav >
    </div >
  )
}
