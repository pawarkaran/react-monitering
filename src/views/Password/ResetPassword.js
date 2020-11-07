import React, { useEffect, useState } from 'react'
import {
  CButton,
  CCol,

} from '@coreui/react'
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import { ToastsContainer, ToastsContainerPosition, ToastsStore } from 'react-toasts';
import { Navbar } from '../Navbar/Navbar';
import { FooterMain } from '../Footer/FooterMain';

export const ResetPassword = ({ match, history }) => {


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


  const onSubmit = async (e) => {
    // console.log("control1");

    // console.log(password, password2)
    e.preventDefault();
    if ((password === password2) && password && password2) {
      setFormData({ ...formData });
      console.log("control2");

      axios
        .put(`http://164.52.201.141:3005/password/resetpassword`, {
          newPassword: password,
          resetpasswordlink: token,
        })
        .then(res => {
          // console.log("556456");


          // console.log(res.data.message)
          setFormData({
            ...formData,
            password: '',
            password2: ''
          });

          history.push("/login")
          toast.success("Password Changed Plase Login With New Password", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          // console.log("control");
          // ToastsStore.success("Password Changed Login With your new Password")

        })
        .catch(err => {
          // ToastsStore.error("Oops Something went wrong. Token might be Expired")
          toast.error("Oops Something went wrong.\ \n\
           Please Try Again Later", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        });
    } else {
      // ToastsStore.warning('Passwords don\'t matches');
      toast.warning('Passwords don\'t matches', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };



  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      {/* ------------- Navbar ------------- */}

      <div class="sticky-top">
        <Navbar />
      </div>

      {/* <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        /> */}
      {/* Same as */}
      <ToastContainer />

      {/* <ToastsContainer store={ToastsStore} position={ToastsContainerPosition.TOP_CENTER} /> */}

      {/* -------------------------------- */}


      <div className="card-bg c-app c-default-layout flex-row justify-content-center ">

        {/* <h1 className="">Name: {firstname}</h1> */}



        {/* <div className=" d-flex justify-content-center"> */}

        {/* <CContainer className="login-card"> */}



        {/* <div className="card shadow-lg  "> */}
        {/* <img className="card-img-top" src="..." alt="Card image cap" /> */}
        {/* <div className="card-body " md="5"> */}

        <div className="card" >

          <h5 className="card-title mt-3"><h1 className="tittle-login text-center ">Password Reset</h1>
            <p className="text-muted text-center m-2 ml-3 mr-3">If password is changed you will be redirected to Login Page</p></h5>
          <div className="justify-content-center">
            <div md="" className="m-4" >


              <form
                className='needs-validation'
                onSubmit={onSubmit}

              >
                <CCol md="12" className="col-verify" >
                  <div className="form-group ">
                    <label className="" >
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
                    <label className="" >
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


              <div className="forgot-password text-right">
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



      <FooterMain />


    </div>
  )
}
