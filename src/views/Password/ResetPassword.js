import React, { useEffect, useState } from 'react'
import {
  CButton,
  CCol,
  CContainer,
  CCollapse, CNavbar, CNavbarBrand, CNavbarNav, CToggler,

  CLink, CImg
} from '@coreui/react'
import axios from 'axios';
import { toast } from 'react-toastify';
import { ToastsContainer, ToastsContainerPosition, ToastsStore } from 'react-toasts';

export const ResetPassword = ({ match }) => {


  const [formData, setFormData] = useState({
    password: '',
    password2: '',
    token: '',
  });
  const { password, password2, token } = formData;

  useEffect(() => {
    let token = match.params.token
    if (token) {
      setFormData({ ...formData, token })
    }
  }, [])
  const handleChange = text => e => {
    setFormData({ ...formData, [text]: e.target.value });
  };
  const handleSubmit = e => {
    // console.log("1");
    e.preventDefault();
    console.log("2");
    // console.log(data);
    console.log(password, password2)
    if ((password === password2) && password && password2) {
      setFormData({ ...formData });
      axios
        .put(`http://localhost:5000/password/resetpassword`, {
          newPassword: password,
          resetpasswordlink: token
        })
        .then(res => {
          ToastsStore.success("Password Changed Login With your new Password")
console.log("helloo");
          // console.log(res.data.message)
          setFormData({
            ...formData,
            password: '',
            password2: ''
          });
          // ToastsStore.success("Password Changed Login With your new Password")

        })
        .catch(err => {
          ToastsStore.error("Oops Something went wrong")
        });
    } else {
      ToastsStore.warning('Passwords don\'t matches');
    }
  };



  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      {/* ------------- Navbar ------------- */}

      <div>
        <CNavbar expandable="lg" className="navbar-com p-2 " >
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
              <CLink className="navbar-12 pr-3 pl-3 text-decoration-none"><span className="navbar-12"></span></CLink>



            </CNavbarNav>
            <CNavbarNav className=" ml-auto text-center d-flex justify-content-center">
              <CLink href="/#/login" className="nav-righty text-white ml-3 mr-3 text-decoration-none "><span className="nav-righty">Login </span></CLink>
              <CLink href="/#/register" className="nav-righty text-white ml-3 mr-3  text-decoration-none"><span className="nav-righty">Sign Up </span></CLink>


            </CNavbarNav>
          </CCollapse>
        </CNavbar>

      </div>

      <ToastsContainer store={ToastsStore} position={ToastsContainerPosition.TOP_RIGHT} />

      {/* -------------------------------- */}


      <div className="verify-email-bg c-app c-default-layout flex-row   ">
        <CContainer className="verify-email" >
          <div className="card-verify card border-right-0 shadow-lg pt-5 pr-3 pl-3 ">
            <h3 className="text-center text-white  ">Reset Password</h3>
            {/* <p className="card-text text-center text-white p-4 ">Write your email id here to get email to reset password</p> */}
            <div className="justify-content-center">
              <form
                className='needs-validation'
                onSubmit={handleSubmit}

              >
                <CCol md="12" className="col-verify " >
                  <div className="form-group ">
                    <label className="text-white" >
                      New Password
                            <span className="text-muted"> (Atleast 8 characters):</span>
                      <span className="text-danger">*</span>
                    </label>
                    <input
                      type="password"
                      onChange={handleChange('password')}
                      value={password}
                      className="form-control input border-2 outline-none rounded-sm   "
                      name="password"
                      // label="Email Id"
                      placeholder="Password"
                      // autoComplete="email"
                      // aria-required
                      required
                      minLength="5"
                      maxLength="30"

                    />



                  </div>




                  <div className="form-group">
                    <label className="text-white" >
                      Confirm Password
                            <span className="text-muted"> (Atleast 8 characters):</span>
                      <span className="text-danger">*</span>
                    </label>
                    <input
                      type="password"
                      onChange={handleChange('password2')}
                      value={password2}
                      className="form-control input  border-2 outline-none rounded-sm "
                      name="password2"
                      // label="Password"
                      placeholder="Confirm Password"
                      // aria-required
                      required
                      minLength="3"
                      maxLength="30"

                    />
                    {/* {errors.password && <p className="text-danger pt-1">{errors.password.message}</p>} */}
                  </div>



                </CCol>
                <div className="text-center">
                  <CButton type='submit' className="verify-button ">
                    Submit
                </CButton>
                </div>
              </form>
            </div>
          </div>

        </CContainer>
      </div>






    </div>
  )
}
