import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import ClinicList from "./pages/ClinicList";
import FindPatient from "./pages/FindPatient";
import Telemedicine from "./pages/Telemedicine";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />

                    <Route path="/clinic-list" element={<ClinicList />} />
                    <Route path="/find-patient" element={<FindPatient />} />
                    <Route path="/telemedicine" element={<Telemedicine />} />
                </Route>

                {/* <Route path="/login" element={<Login />} />
                <Route path="/forgot-password" element={<ForgotPassword />} /> */}
            </Routes>
        </Router>
    );
}

export default App;
