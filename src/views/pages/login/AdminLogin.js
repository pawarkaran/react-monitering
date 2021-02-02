import React, { useState } from 'react'
import './login.scss';

import {
  CButton,
  CCol,
  CContainer,
  CCollapse, CNavbar, CNavbarBrand, CNavbarNav, CToggler,

  CRow, CLink, CImg
} from '@coreui/react'
import { useForm } from 'react-hook-form';
import ReCAPTCHA from 'react-google-recaptcha';
import { ToastsContainer, ToastsContainerPosition, ToastsStore } from 'react-toasts';
import { Link } from 'react-router-dom';


const AdminLogin = ({ setAuth1, history }) => {

  //  ---------------- ReCAPTCHa -----------------
  // const reCaptcha = useRef();
  const [token, setToken] = useState("");
  const [error, setError] = useState("");
  // --------------------------

  const [isOpen, setIsOpen] = useState(false);



  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });
  const { email, password } = inputs;


  const { register, handleSubmit, errors } = useForm();

  const onSubmit = async (data, e) => {
    // --------------
    if (!token) {
      setError("You must verify the captcha");
      return;
    }
    setError("");
    // --------------
    e.preventDefault();
    console.log(data)
    try {
      const body = { email, password };
      const response = await fetch(
        "http://localhost:5000/admin/adminlogin",
        {
          method: "POST",
          headers: {
            "Content-type": "application/json"
          },
          body: JSON.stringify(body)
        }
      );

      const parseRes = await response.json();
      // console.log(parseRes);

      if (parseRes.jwtToken_admin) {
        localStorage.setItem("token_admin", parseRes.jwtToken_admin);

        history.push('/admin/dashboard')
        ToastsStore.success("Logged in Seccessfully")

        // ToastsStore.success(parseRes)
        setAuth1(true);
        // toast.success("Logged in Successfully");
      } else {
        ToastsStore.error(parseRes)

        // toast.error(parseRes);
        // setAuth(false);
        // toast.error(parseRes);
      }
    } catch (err) {
      console.error(err.message);
    }
  };



  const changeHandler = e =>
    setInputs({ ...inputs, [e.target.name]: e.target.value });





  return (
    <div className="login-page ">

      {/* ------------ Navbar -------------- */}


      <div>
        <CNavbar expandable="sm" className="navbar-com p-2 " >
          <CToggler inNavbar onClick={() => setIsOpen(!isOpen)} />
          <CNavbarBrand className="navbar-brand "  >
            <CImg
              src={process.env.PUBLIC_URL + "/images/logs.png"}
              // src="../images/logs.png"
              height="50px"
            // className="mb-2"
            />
          </CNavbarBrand>
          <CCollapse show={isOpen} navbar>
            <CNavbarNav className="navbar-text text-center ">
              <CLink href="/" className="navbar-12 pr-3 pl-3 text-decoration-none" ><span className="navbar-12">Home</span></CLink>
              <CLink className="navbar-12 pr-3 pl-3 text-decoration-none "><span className="navbar-12"> About</span></CLink>
              <CLink className="navbar-12 pr-3 pl-3 text-decoration-none"><span className="navbar-12">Contact</span></CLink>
              <CLink className="navbar-12 pr-3 pl-3 text-decoration-none"><span className="navbar-12">Link</span></CLink>
              {/* <CLink className="navbar-12 pr-3 pl-3 text-decoration-none"><span className="navbar-12">{firstname}</span></CLink> */}



            </CNavbarNav>
            <CNavbarNav className=" ml-auto text-center d-flex justify-content-center">
              <CLink href="/#/admin/admin-login" className="nav-righty text-white ml-3 mr-3 text-decoration-none "><span className="nav-righty">Login </span></CLink>
              <CLink href="/#/admin/admin-register" className="nav-righty text-white ml-3 mr-3  text-decoration-none"><span className="nav-righty">Sign Up </span></CLink>


            </CNavbarNav>
          </CCollapse>
        </CNavbar>

      </div>


      <ToastsContainer store={ToastsStore} position={ToastsContainerPosition.TOP_RIGHT} />

      {/* ----------------------------------------- */}
      <div className="card-bg c-app c-default-layout flex-row justify-content-center ">

        {/* <h1 className="">Name: {firstname}</h1> */}



        <div className=" d-flex justify-content-center">
          <CContainer className="login-card ">
            <div className="card-group pt-1 pb-1">
              <div className="card1 card border-right-0 shadow-lg pt-5 ">
                <CImg className="card-img-top p-3" src={process.env.PUBLIC_URL + "/images/logs.png"} alt="Card image cap" />
                <div className="card-bod-bg card-body pt-3">
                  {/* <h5 className="card-title">Card title</h5> */}
                  <p className="card-text text-center pt-2 pb-5">The DevOps Services is established with the aim of providing benchmark SMAC
                solutions to the Small,Medium and Large scale companies across the globe.</p>
                  {/* <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p> */}
                </div>
              </div>
              <div className="card shadow-lg">
                {/* <img className="card-img-top" src="..." alt="Card image cap" /> */}
                <div className="card-body">
                  <h5 className="card-title"><h1 className="tittle-login text-center ">Admin Login Panel</h1>
                    <p className="text-muted text-center">Welcome Back</p></h5>
                  <CRow className="justify-content-center p-4">
                    <CCol md="9" >
                      {/* <CCard className="mx-4">
              <CCardBody className="p-4"> */}
                      <form
                        className='needs-validation'
                        onSubmit={handleSubmit(onSubmit)}
                        noValidate
                      >




                        <div className="form-group ">
                          <label className="label-form" >
                            Email Id:
                  <span className="text-danger">*</span>
                          </label>
                          <input
                            type="email"
                            onChange={changeHandler}
                            value={email}
                            className="form-control input  bg-transparent border-2 outline-none rounded-sm   "
                            name="email"
                            // label="Email Id"
                            placeholder="Email Id"
                            // autoComplete="email"
                            // aria-required
                            required
                            minLength="5"
                            maxLength="30"
                            ref={register({
                              required: "Please Provide a Valid Email Id",
                              pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                // message: "invalid email address"
                              }
                            })}
                          />
                          {errors.email && <p className="text-danger pt-1">{errors.email.message}</p>}


                        </div>




                        <div className="form-group">
                          <label className="label-form" >
                            Password
                 <span className="text-muted"> (Atleast 8 characters):</span>
                            <span className="text-danger">*</span>
                          </label>
                          <input
                            type="password"
                            onChange={changeHandler}
                            value={password}
                            className="form-control input  bg-transparent border-2 outline-none rounded-sm "
                            name="password"
                            // label="Password"
                            placeholder="Password"
                            // aria-required
                            required
                            minLength="3"
                            maxLength="30"
                            ref={register({ required: "Password Required", })}
                          />
                          {errors.password && <p className="text-danger pt-1">{errors.password.message}</p>}
                        </div>

                        <div className="form-group">

                          <ReCAPTCHA
                            // ref={reCaptcha}
                            sitekey="6LfptdQZAAAAAIaZPNPZMnTK_RoFPt4BmxPTgUbJ"
                            onChange={token => setToken(token)}
                            onExpired={e => setToken("")}
                          // ref={register({
                          //   required: true,
                          // })}
                          // onChange={token => setToken(token)}
                          // onExpired={e => setToken("")}
                          />
                        </div>



                        <CButton type="submit" className="label-button" block>Login</CButton>
                      </form>
                      <div className="forgot-password text-right">
                        <Link to="/password/forgotpassword" className="forgot-password text-muted">Forget Password</Link>
                        </div>

                      <h6 className="font-small text-center text-muted text-lg p-1 pt-4">
                        By signing up, you agree to Devops's
               <br />
                        <a href="/#" className="font-small  grey-text d-flex justify-content-center text-muted">
                          <span className="font-weight-bold">Terms of Service and Privacy Policy.</span></a>
                      </h6>

                    </CCol>
                  </CRow>
                </div>
              </div>

            </div>
          </CContainer>

          {/* <h4>
      Hey, My name is <div id="fragment1">Hariharan</div>
    <div id="fragment2"> Hari Harker</div>
    </h4> */}
        </div>
      </div>




      <footer class="footer-section">
        <div class="container">
          <div class="footer-cta pt-5 pb-5">
            <div class="row">
              <div class="col-xl-4 col-md-4 mb-30">
                <div class="single-cta">
                  <i class="fas fa-map-marker-alt"></i>
                  <div class="cta-text">
                    <h4>Find us</h4>
                    <span>Mumbai, mumbai mumbai</span>
                  </div>
                </div>
              </div>
              <div class="col-xl-4 col-md-4 mb-30">
                <div class="single-cta">
                  <i class="fas fa-phone"></i>
                  <div class="cta-text">
                    <h4>Call us</h4>
                    <span>981234567</span>
                  </div>
                </div>
              </div>
              <div class="col-xl-4 col-md-4 mb-30">
                <div class="single-cta">
                  <i class="far fa-envelope-open"></i>
                  <div class="cta-text">
                    <h4>Mail us</h4>
                    <span>mail@info.com</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="footer-content pt-5 pb-5">
            <div class="row">
              <div class="col-xl-4 col-lg-4 mb-50">
                <div class="footer-widget">


                  <div class="footer-social-icon">
                    <span>Follow us</span>
                    <a href="/"><i class="fab fa-facebook-f facebook-bg"></i></a>
                    <a href="/"><i class="fab fa-twitter twitter-bg"></i></a>
                    <a href="/"><i class="fab fa-google-plus-g google-bg"></i></a>
                  </div>
                </div>
              </div>
              <div class="col-xl-4 col-lg-4 col-md-6 mb-30">
                <div class="footer-widget">
                  <div class="footer-widget-heading">
                    <h3>Useful Links</h3>
                  </div>
                  <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/">About US</a></li>
                    <li><a href="/"> Our Services</a></li>
                    <li><a href="/">Contact Us</a></li>
                    <li><a href="/">Expert Team</a></li>


                  </ul>
                </div>
              </div>
            </div>
          </div>

        </div>
        <div class="copyright-area">
          <div class="container">
            <div class="row">
              <div class="col-xl-6 col-lg-6 text-center text-lg-left">
                <div class="copyright-text">
                  <p>Copyright &copy; 2020, All Right Reserved <a href="https://codepen.io/anupkumar92/">DevOp's</a></p>
                </div>
              </div>
              <div class="col-xl-6 col-lg-6 d-none d-lg-block text-right">
                <div class="footer-menu">
                  <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/">Terms</a></li>
                    <li><a href="/">Privacy</a></li>
                    <li><a href="/">Policy</a></li>
                    <li><a href="/">Contact</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>


    </div>
  )
}

export default AdminLogin
