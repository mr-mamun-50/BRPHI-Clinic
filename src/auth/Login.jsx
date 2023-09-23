import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/images/GramGP.png";
import vectorImg from "../assets/images/young-doctors.png";
import getPlayStore from "../assets/images/app-store-badge-google-play.png";
import getAppleStore from "../assets/images/Download-On-The-App-Store.png";
import brphiLogo from "../assets/images/BRPHI.png";
import axios from "axios";
import CustomSnackbar from "../utilities/SnackBar";
// import be2winLogo from "../assets/images/be2win.png";


export default function Login() {

  const [loginInfo, setLoginInfo] = useState({});
  const [remember, setRemember] = useState(false)

  const [error, setError] = useState()
  const [success, setSuccess] = useState("")
  const [loading, setLoading] = useState()

  const navigate = useNavigate();

  const login = (e) => {
    e.preventDefault()

    setLoading(true)
    axios.get('/sanctum/csrf-cookie').then(response => {
      axios.post('/api/level_1/login', loginInfo).then(res => {
        if (res.status === 200) {
          if (remember) {
            localStorage.setItem('level_1_token', res.data.access_token)
            localStorage.setItem('user', JSON.stringify(res.data.user))
          } else {
            sessionStorage.setItem('level_1_token', res.data.access_token)
            sessionStorage.setItem('user', JSON.stringify(res.data.user))
          }
          setLoading(false)
          setSuccess(res.data.message)
          navigate('/level_1')
          setTimeout(() => { setSuccess('') }, 5000)
        } else {
          setLoading(false)
          setError(res.data.message)
          setTimeout(() => { setError('') }, 5000)
        }
      }).catch(err => {
        setLoading(false)
        setError(err.response.data.message)
        setTimeout(() => { setError('') }, 5000)
      });
    });
  }

  console.log(loginInfo)



  return (
    <div className="bg-light">
      <div className="container bg-light col-lg-9">
        {/* header section */}
        <div className="d-md-flex justify-content-between">
          <div className="d-flex align-items-center py-2">
            <div className="shadow" style={{ width: "150px", borderRadius: "50px" }}>
              <img className="img-fluid" src={logo} alt="GramGP" />
            </div>
            <div className="ms-4">
              <h3 className="text-primary mt-3 fw-bold mb-0">GramGP</h3>
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
          {/* body left image */}
          <div className="col-md-6 p-5 d-none d-md-block">
            <div className="p-3">
              <img className="img-fluid" src={vectorImg} alt="" />
            </div>

            {/* play store and apple store link for desktop */}
            <div className="d-flex justify-content-center mt-5">
              <Link className="mx-2 shadow">
                <img src={getPlayStore} alt="" style={{ height: "50px" }} />
              </Link>
              <Link className="mx-2 shadow">
                <img src={getAppleStore} alt="" style={{ height: "50px" }} />
              </Link>
            </div>
          </div>

          {/* login form */}
          <div className="col-md-6">
            <div className="card px-2 px-lg-4 py-3 rounded-8 shadow-lg">
              <div className="card-header pb-0">
                <h2>Login</h2>
                <p>Enter your login credentials here</p>
              </div>
              <div className="card-body">

                <form onSubmit={login}>
                  {/* level selector on click */}
                  <div className="mb-3">
                    <label htmlFor="select-clinic" className="form-label">Role</label>
                    <select className="form-select" id="select-clinic" name="clinic"
                      onChange={(e) => setLoginInfo({ ...loginInfo, role: e.target.value })}>
                      <option selected disabled>Select your role</option>
                      <option value={4}>Doctor</option>
                      <option value={4}>Nurse</option>
                      <option value={4}>Midwife</option>
                      <option value={3}>Clinic Manager</option>
                      <option value={2}>Central Team Executive</option>
                      <option value={1}>Managing Director</option>
                      <option value={1}>UK Senior Director</option>
                      <option value={4}>UK Doctor</option>
                    </select>
                  </div>

                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">Username / Email</label>
                    <input type="email" className="form-control" id="email"
                      onChange={(e) => setLoginInfo({ ...loginInfo, email: e.target.value })}
                      name="email" aria-describedby="emailHelp" />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control"
                      onChange={(e) => setLoginInfo({ ...loginInfo, password: e.target.value })}
                      id="password" name="password" />
                  </div>

                  {loginInfo.role >= 3 && loginInfo.role <= 4 ?
                    <div className="mb-3">
                      <label htmlFor="select-clinic" className="form-label">Clinic</label>
                      <select className="form-select" id="select-clinic" name="clinic" value={loginInfo.clinic}
                        onChange={(e) => setLoginInfo({ ...loginInfo, clinic: e.target.value })}>
                        <option selected disabled>Select Clinic</option>
                        <option value="1">
                          A Rob & Azizun Medical Center, Jogonnathpur
                        </option>
                        <option value="2">
                          Hazi Yousuf Miah MedicalCenter,Bishwanath
                        </option>
                        <option value="3">
                          Khan Family Clinic,Beanibazar
                        </option>
                      </select>
                    </div>
                    : ''}

                  <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="remember_me" name="remember" checked={remember}
                      onChange={(e) => setRemember(e.target.checked)} />
                    <label className="form-check-label" htmlFor="remember_me">Remember me</label>
                  </div>

                  <div className="d-flex justify-content-between pt-2">
                    <button type="button" className="btn btn-link px-0 forgetPassBtn">Forgot your password?</button>

                    <button type="submit" className="btn btn-primary ">
                      {loading ? <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> :
                        <div className="d-flex">
                          Login<i className="fas fa-sign-in-alt mt-1 ms-2"></i>
                        </div>
                      }
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* play store and apple store link for mobile */}
        <div className="d-flex justify-content-center mt-5 d-block d-md-none">
          <Link className="mx-2 shadow">
            <img src={getPlayStore} alt="" style={{ height: "50px" }} />
          </Link>
          <Link className="mx-2 shadow">
            <img src={getAppleStore} alt="" style={{ height: "50px" }} />
          </Link>
        </div>
      </div>

      {/* footer section */}
      <footer className="py-3 mt-5">
        <div className="container">
          <div className="d-flex justify-content-center align-items-end">
            <img src={brphiLogo} alt="" style={{ height: "45px" }} />
            {/* <img className="ms-4" src={be2winLogo} alt="" style={{ height: "40px" }} /> */}
          </div>
          <div className="d-md-flex justify-content-center small mt-3 text-center">
            <div className="text-muted">
              {`© ${new Date().getFullYear().toString()}. Developed by `}
              <Link to="https://github.com/mr-mamun-50" target="_blank">
                <b>Mamunur Rashid Mamun</b>
              </Link>
            </div>
            <div className="ms-1">
              {" • "}<Link to={'#'}>Privacy Policy</Link>
              {" • "}<Link to={'#'}>Terms &amp; Conditions</Link>
            </div>
          </div>
        </div>
      </footer>

      {/* Snackbar */}
      <CustomSnackbar message={error} status={'error'} />
      <CustomSnackbar message={success} status={'success'} />
    </div>
  );
}
