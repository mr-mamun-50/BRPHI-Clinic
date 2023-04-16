import React from "react";
import HomeMenuCard from "../components/HomeMenuCard";

export default function Home() {
    return (
        <>
            <div className="heroSection p-relative">
                <div className="container p-absolute t-100 s-50 tr-middle px-5">
                    {/* cards go here */}
                    <div className="row">
                        <HomeMenuCard
                            text="Clinic List"
                            icon="fas fa-hospital"
                            route="/clinic-list"
                        />
                        <HomeMenuCard
                            text="Find Patient"
                            icon="fas fa-bed"
                            route="/find-patient"
                        />
                        <HomeMenuCard
                            text="Register Patient"
                            icon="fas fa-hospital-user"
                            route="/register-patient"
                        />
                        <HomeMenuCard
                            text="Telemedicine"
                            icon="fas fa-stethoscope"
                            route="/telemedicine"
                        />
                    </div>
                </div>
            </div>
        </>
    );
}
