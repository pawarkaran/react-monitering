import React, { useState } from 'react'
import './register.scss';
import {
  CButton,
  CCol,
  CContainer,
  CCollapse, CNavbar, CNavbarBrand, CNavbarNav, CToggler,
  CRow, CLink, CImg, CNavLink,
} from '@coreui/react'
import { useForm } from 'react-hook-form';
import ReCAPTCHA from 'react-google-recaptcha';
import { ToastsContainer, ToastsContainerPosition, ToastsStore } from 'react-toasts';

import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { Link } from 'react-router-dom';
import { FooterMain } from '../../Footer/FooterMain';
import NavbarAdmin from '../../Navbar/NavbarAdmin';

const AdminRegister = ({ setAuth }) => {

  //  ---------------- ReCAPTCHa -----------------
  // const reCaptcha = useRef();
  const [token, setToken] = useState("");
  const [error, setError] = useState("");
  // --------------------------
  // -------------- Navbar----------
  const [isOpen, setIsOpen] = useState(false);
  // -----------------------------------------

  const [mob, setMob] = useState({
    mobile:""
  })
  
  const { mobile } = mob

  const [inputs, setInputs] = useState({
    companyname: "",
    domainname: "",
    firstname: "",
    lastname: "",
    // mobile: "",
    email: "",
    password: "",
  });

  const { companyname, domainname, firstname, lastname, email, password } = inputs;

  const { register, handleSubmit, errors } = useForm();

  const onSubmit = async (data, e) => {

    // --------------
    if (!token) {
      setError("Yoou must verify the captcha");
      return;
    }
    setError("");
    // --------------
    e.preventDefault();
    // console.log(data)
    e.target.className += " was-validated";
    try {
      const body = { companyname, domainname, firstname, lastname, mobile, email, password };
      const response = await fetch(
        "http://164.52.201.141:3005/admin/adminregister",
        {
          method: "POST",
          headers: {
            "Content-type": "application/json"
          },
          body: JSON.stringify(body)
        }
      );
      // console.log(parseRes);
      ToastsStore.success("Registered Seccessfully Please Check Email ID ")
      console.log("press1");
      const parseRes = await response.json();
      console.log("press2");

      console.log(parseRes);

      if (parseRes.jwtToken) {
        localStorage.setItem("token", parseRes.jwtToken);
        ToastsStore.success(parseRes)
        setAuth(true);
        // toast.success("Register Successfully Please Verify from email");
      } else {
        ToastsStore.error(parseRes)
        setAuth(false);

      }
    } catch (err) {
      console.error(err.message);
    }
  };


  const changeHandler = e =>
    setInputs({ ...inputs, [e.target.name]: e.target.value });

    const changeMobile = e => 
    setMob({ ...mob,[e.target.name]: e.target.value  })

  return (
    <div>


      {/* ------------------- Navbar ------------------- */}

      <div class="sticky-top">
        <NavbarAdmin />
      </div>

      {/* ---------------------------------- */}



      <ToastsContainer store={ToastsStore} position={ToastsContainerPosition.TOP_RIGHT} />


      <div className="card-bg c-app c-default-layout flex-row justify-content-center ">

        {/* <h1 className="">Name: {firstname}</h1> */}



        {/* <div className=" d-flex justify-content-center"> */}


        <div className="card mt-3 mb-3" >

          <h5 className="card-title mt-3"><h1 className="tittle-login text-center ">Admin Register Panel</h1>
            {/* <p className="text-muted text-center">Welcome Back</p> */}
          </h5>
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
                    Comapany Name:
<span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    onChange={changeHandler}
                    value={companyname}
                    className="form-control input  bg-transparent border-2 outline-none rounded-sm   "
                    name="companyname"
                    placeholder="Company Name"
                    required
                    minLength="1"
                    maxLength="30"
                    ref={register({
                      required: "Please Provide a Comapny Name",
                      minLength: {
                        value: 2,
                        message: 'Min 2 character' // <p>error message</p>
                      }
                    })}
                  />
                  {errors.companyname && <p className="text-danger pt-1">{errors.companyname.message}</p>}


                </div>

                <div className="form-group ">
                  <label className="label-form" >
                    Domain Name:
<span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    onChange={changeHandler}
                    value={domainname}
                    className="form-control input  bg-transparent border-2 outline-none rounded-sm   "
                    name="domainname"
                    placeholder="Domain Name"
                    required
                    minLength="2"
                    maxLength="45"
                    ref={register({
                      required: "Please Provide a Domain Name",
                      minLength: {
                        value: 2,
                        message: 'Min 2 character' // <p>error message</p>
                      }
                    })}
                  />
                  {errors.domainname && <p className="text-danger pt-1">{errors.domainname.message}</p>}


                </div>

                <div className="form-group ">
                  <label className="label-form" >
                    First Name:
<span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    onChange={changeHandler}
                    value={firstname}
                    className="form-control input  bg-transparent border-2 outline-none rounded-sm   "
                    name="firstname"
                    placeholder="First Name"
                    required
                    minLength="2"
                    maxLength="30"
                    // aria-invalid={errors.firstname ? "true" : "false"}
                    ref={register({
                      required: "Please Provid Valid Name",
                      minLength: {
                        value: 2,
                        message: 'Min 2 character' // <p>error message</p>
                      }
                    })}
                  />
                  {errors.firstname && <p className="text-danger pt-1">{errors.firstname.message}</p>}


                </div>

                <div className="form-group ">
                  <label className="label-form" >
                    Last Name:
<span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    onChange={changeHandler}
                    value={lastname}
                    className="form-control input  bg-transparent border-2 outline-none rounded-sm   "
                    name="lastname"
                    placeholder="Last Name"
                    required
                    minLength="2"
                    maxLength="30"
                    ref={register({
                      required: "Please Provide Valid Name",
                      minLength: {
                        value: 2,
                        message: 'Min 2 character' // <p>error message</p>
                      }
                    })}
                  />
                  {errors.lastname && <p className="text-danger pt-1">{errors.lastname.message}</p>}


                </div>

                <div className="form-group ">
                  <label className="label-form" >
                    Mobile No.<span className="text-muted">(Optional):</span>
                    {/* <span className="text-danger">*</span> */}
                  </label>
                  <PhoneInput
                    inputProps={{
                      name: "mobile",
                      // onChange=changeHandler,


                    }}
                    // fullWidth="true"
                    // name={mobile}
                    country={'in'}
                    value={mobile}
                    onChange={mobile => setMob({ mobile })}
                  // name="mobile"
                  // ref={register({
                  //   required: false,
                  // })}
                  />

                  {/* <input

    type="tel"
    onChange={changeHandler}
    value={mobile}
    className="form-control input  bg-transparent border-2 outline-none rounded-sm   "
    name="mobile"
    placeholder="Mobile No."
    required
    minLength="5"
    maxLength="15"
    ref={register({
      required: false,
    })}
  />
  {errors.mobile && <p className="text-danger pt-1">{errors.mobile.message}</p>} */}


                </div>


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
                        message: "Email is Not Valid"
                      },
                      minLength: {
                        value: 2,
                        message: 'Min 2 character' // <p>error message</p>
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
                    minLength="5"
                    maxLength="30"
                    ref={register({
                      required: "Password Required",
                      minLength: {
                        value: 5,
                        message: 'Min 5 character' // <p>error message</p>
                      }

                    })}
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



                <CButton type="submit" className="label-button" block>Register</CButton>
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


        {/* </div> */}
      </div>

      {/* --------------- Footer ------------ */}
      <FooterMain />
      {/* -------------------------------- */}
    </div>
  )
}

export default AdminRegister






