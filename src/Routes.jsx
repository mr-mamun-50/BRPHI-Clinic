import React from 'react'
import { Route, Routes } from "react-router-dom";
import Level4Layout from "./level_4/components/Layout";
import Home from "./level_4/views/Home";
import ClinicList from "./level_4/views/ClinicList";
import FindPatient from "./level_4/views/FindPatient";
import Telemedicine from "./level_4/views/Telemedicine";
import RegisterPatient from "./level_4/views/RegisterPatient";
import Login from "./auth/Login";
import PublicRoute from "./utilities/PublicRoute";
import Level4PrivateRoute from "./level_4/components/PrivateRoute";
import Level1PrivateRoute from "./level_1/components/PrivateRoute";
import Level1Layout from "./level_1/components/Layout";
import Level1Dashboard from './level_1/views/Dashboard';
import Clinics from './level_1/views/Clinics';
import AssignDoctors from './level_1/views/AssignDoctors';
import HealthProfessionals from './level_1/views/HealthProfessionals';

export default function AllRoutes() {
  return (
    <Routes>
      {/**
          |--------------------------------------------------------------------------
          | Level 1 Routes (Managing Director & UK senior directors)
          |--------------------------------------------------------------------------
         */}
      <Route path="/level_1" element={<Level1PrivateRoute><Level1Layout /></Level1PrivateRoute>}>
        <Route index element={<Level1Dashboard />} />

        <Route path="clinics" element={<Clinics />} />
        <Route path="assign_doctors" element={<AssignDoctors />} />
        <Route path="health_professionals" element={<HealthProfessionals />} />
      </Route>


      {/**
          |--------------------------------------------------------------------------
          | Level 2 Routes (Central team BD)
          |--------------------------------------------------------------------------
         */}


      {/**
          |--------------------------------------------------------------------------
          | Level 3 Routes (Clinic managers)
          |--------------------------------------------------------------------------
         */}


      {/**
          |--------------------------------------------------------------------------
          | Level 4 Routes (Doctors, Nurses, Midwifes)
          |--------------------------------------------------------------------------
         */}
      <Route path="/level_4" element={<Level4PrivateRoute><Level4Layout /></Level4PrivateRoute>}>
        <Route index element={<Home />} />

        <Route path="clinic-list" element={<ClinicList />} />
        <Route path="find-patient" element={<FindPatient />} />
        <Route path="register-patient" element={<RegisterPatient />} />
        <Route path="telemedicine" element={<Telemedicine />} />
      </Route>


      <Route path="/login" element={<PublicRoute><Login /></PublicRoute>} />
      {/* <Route path="/forgot-password" element={<ForgotPassword />} /> */}
    </Routes>
  )
}
