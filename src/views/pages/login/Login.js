import React, { useState } from 'react'
import './login.scss';


import {
  CButton,
  CCol,
  CContainer,
  CCollapse, CNavbar, CNavbarBrand, CNavbarNav, CToggler,

  CRow, CLink, CImg, CForm, CInput, CNavLink, CCard
} from '@coreui/react'
import { useForm } from 'react-hook-form';
import ReCAPTCHA from 'react-google-recaptcha';

import { ToastsContainer, ToastsContainerPosition, ToastsStore } from 'react-toasts';
import { Link } from 'react-router-dom';
import { FooterMain } from '../../Footer/FooterMain';
import { Navbar } from '../../Navbar/Navbar';
import { toast, ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';


const Login = ({ setAuth, history }) => {



  // const [ firstname, setName] = useState("");


  // const getProfile = async () => {
  //   try {
  //     const res = await fetch("http://localhost:3000/dashboard", {
  //       method: "GET",
  //       headers: { jwt_token: localStorage.token }
  //     });

  //     const parseData = await res.json();
  //     setName(parseData.user_firstname);
  //   } catch (err) {
  //     console.error(err.message);
  //   }
  // };

  // const logout = async e => {
  //   e.preventDefault();
  //   try {
  //     localStorage.removeItem("token");
  //     // setAuth(false);
  //     // toast.success("Logout successfully");
  //   } catch (err) {
  //     console.error(err.message);
  //   }
  // };

  // useEffect(() => {
  //   getProfile();
  // }, []);

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
      setError("Yoou must verify the captcha");
      return;
    }
    setError("");
    // --------------
    e.preventDefault();
    console.log(data)
    try {
      const body = { email, password };
      const response = await fetch(
        "http://164.52.201.141:3005/authentication/login",
        {
          method: "POST",
          headers: {
            "Content-type": "application/json"
          },
          body: JSON.stringify(body)
        }
      );

      const parseRes = await response.json();

      if (parseRes.jwtToken) {
        localStorage.setItem("token", parseRes.jwtToken);

        history.push('/dashboard')
        // ToastsStore.success("Logged in Seccessfully")
        toast.success("Logged in Seccessfully", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        setAuth(true);

        // ToastsStore.success("Logged in Seccessfully")

      } else {
        setAuth(false);
        // ToastsStore.error(parseRes)
        toast.error(parseRes, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
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

      {/* 
      <div class="">
        <CNavbar expandable="sm" className="navbar-com p-2 " sticky="true" fixed="top">
          <CToggler inNavbar onClick={() => setIsOpen(!isOpen)} />
          <CNavbarBrand className="navbar-brand "  >
            <a href="/"
              className="text-decoration-none">
              <CImg
                src={process.env.PUBLIC_URL + "/images/logs.png"}

                height="50px"
              />
            </a>
          </CNavbarBrand>
          <CCollapse show={isOpen} navbar>
            <CNavbarNav className="navbar-text text-center ">
              <CLink href="/" className="navbar-12 pr-3 pl-3 text-decoration-none" ><span className="navbar-12">Home</span></CLink>
              <CLink className="navbar-12 pr-3 pl-3 text-decoration-none"><span className="navbar-12">Contact</span></CLink>



            </CNavbarNav>
            <CNavbarNav className=" ml-auto text-center d-flex justify-content-center">
              <CLink href="/#/login" className="nav-righty text-white ml-3 mr-3 text-decoration-none "><span className="nav-righty">Login </span></CLink>
              <CLink href="/#/register" className="nav-righty text-white ml-3 mr-3  text-decoration-none"><span className="nav-righty">Sign Up </span></CLink>


            </CNavbarNav>
          </CCollapse>
        </CNavbar>

      </div> */}

      {/* ------------------- PRSAC =------------------- */}

      <div class="sticky-top">
        <Navbar />
      </div>

      {/* ---------------------------------- */}
      <div>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        {/* Same as */}
        <ToastContainer />

        {/* <button onClick={() => ToastsStore.success("Hey, you just clicked!")}>Click me</button> */}
        <ToastsContainer store={ToastsStore} position={ToastsContainerPosition.TOP_RIGHT} />


        {/* ----------------------------------------- */}
        <div className="card-bg c-app c-default-layout flex-row justify-content-center ">

          {/* <h1 className="">Name: {firstname}</h1> */}



          {/* <div className=" d-flex justify-content-center"> */}

          {/* <CContainer className="login-card"> */}



          {/* <div className="card shadow-lg  "> */}
          {/* <img className="card-img-top" src="..." alt="Card image cap" /> */}
          {/* <div className="card-body " md="5"> */}

          <div className="card" >

            <h5 className="card-title mt-3"><h1 className="tittle-login text-center ">Login</h1>
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


          {/* </div> */}
          {/* </div> */}


          {/* </CContainer> */}

          {/* <h4>
      Hey, My name is <div id="fragment1">Hariharan</div>
    <div id="fragment2"> Hari Harker</div>
    </h4> */}
          {/* </div> */}
        </div>


        {/* ----------------- Footer ------------ */}
        <FooterMain />
        {/* ----------------------------- */}

      </div>
    </div>
  )
}

export default Login
