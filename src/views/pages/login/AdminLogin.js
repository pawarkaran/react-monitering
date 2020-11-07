import React, { useState } from 'react'
import './login.scss';

import {
  CButton,
  CCol,
  CContainer,
  CCollapse, CNavbar, CNavbarBrand, CNavbarNav, CToggler,

  CRow, CLink, CImg, CNavLink
} from '@coreui/react'
import { useForm } from 'react-hook-form';
import ReCAPTCHA from 'react-google-recaptcha';

import { ToastsContainer, ToastsContainerPosition, ToastsStore } from 'react-toasts';
import { Link } from 'react-router-dom';
import { FooterMain } from '../../Footer/FooterMain';
import NavbarAdmin from '../../Navbar/NavbarAdmin';


const AdminLogin = ({ setAuth, history }) => {

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
        "http://164.52.201.141:3005/admin/adminlogin",
        {
          method: "POST",
          headers: {
            "Content-type": "application/json"
          },
          body: JSON.stringify(body)
        }
      );

      const parseRes = await response.json();
      console.log(parseRes);

      if (parseRes.jwtToken) {
        history.push('/admin/dashboard')
        localStorage.setItem("token", parseRes.jwtToken);
        ToastsStore.success(parseRes)
        setAuth(true);
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


      {/* ------------------- PRSAC =------------------- */}
  
      <div class="sticky-top">
     <NavbarAdmin />
      </div>
    
      {/* ---------------------------------- */}
      <ToastsContainer store={ToastsStore} position={ToastsContainerPosition.TOP_RIGHT} />

      {/* ----------------------------------------- */}
      <div className="card-bg c-app c-default-layout flex-row justify-content-center ">

        {/* <h1 className="">Name: {firstname}</h1> */}

{/* --------------------------- new ------------------------- */}

<div className="card" >

<h5 className="card-title mt-3"><h1 className="tittle-login text-center ">Admin Login Panel</h1>
  <p className="text-muted text-center">Welcome Back</p></h5>
<div className="justify-content-center">
  <div md="" className="m-4" >
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

      <div className="form-group d-flex justify-content-center">
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

  </div>
</div>

</div>


{/* ------------------------------------------------------ */}

{/* 
          <CContainer className="login-card ">
            <div className="card-group pt-1 pb-1">
              <div className="card1 card border-right-0 shadow-lg pt-5 justify-content-center text-center">
              <a href="/"  className="a-images text-decoration-none">
                <CImg className="card-img-top1" src={process.env.PUBLIC_URL + "/images/logs.png"} alt="Card image cap" />
                </a>
                <div className="card-bod-bg card-body pt-1">
                  <p className="card-text text-center pt-2 pb-5">The DevOps Services is established with the aim of providing benchmark SMAC
                solutions to the Small,Medium and Large scale companies across the globe.</p>
                </div>
              </div>
              <div className="card shadow-lg">
                <div className="card-body">
                  <h5 className="card-title"><h1 className="tittle-login text-center ">Admin Login Panel</h1>
                    <p className="text-muted text-center">Welcome Back</p></h5>
                  <CRow className="justify-content-center p-4">
                    <CCol md="9" >
                   
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
                       
                            placeholder="Email Id"
                       
                            required
                            minLength="5"
                            maxLength="30"
                            ref={register({
                              required: "Please Provide a Valid Email Id",
                              pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
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
                   
                            placeholder="Password"
                     
                            required
                            minLength="3"
                            maxLength="30"
                            ref={register({ required: "Password Required", })}
                          />
                          {errors.password && <p className="text-danger pt-1">{errors.password.message}</p>}
                        </div>

                        <div className="form-group d-flex justify-content-center">

                          <ReCAPTCHA
                          
                            sitekey="6LfptdQZAAAAAIaZPNPZMnTK_RoFPt4BmxPTgUbJ"
                            onChange={token => setToken(token)}
                            onExpired={e => setToken("")}
                       
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

      */}
      </div>


<FooterMain />

    </div>
  )
}

export default AdminLogin
