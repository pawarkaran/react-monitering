import React, { useState } from 'react'
import {
  CButton,
  CCol,
  CContainer,
  CCollapse, CNavbar, CNavbarBrand, CNavbarNav, CToggler,

  CLink, CImg
} from '@coreui/react'
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { toast } from 'react-toastify';
import { ToastsContainer, ToastsContainerPosition, ToastsStore } from 'react-toasts';
import { Navbar } from '../Navbar/Navbar';
import { FooterMain } from '../Footer/FooterMain';
import { Link } from 'react-router-dom';

const ForgotPassword = () => {

  const [formData, setFormData] = useState({
    email: "",
  });
  const { email } = formData;


  const { register, handleSubmit, errors } = useForm();


  const onSubmit = async (data, e) => {
    e.preventDefault();
    // console.log(data)
    if (email) {
      setFormData({ ...formData, });
      axios
        .put(`http://164.52.201.141:3005/password/forgotpassword`, {
          email
        })
        .then(res => {

          setFormData({
            ...formData,
            email: '',
          });

          ToastsStore.success("Please Check Your Email for Link")

        })
        .catch(err => {
          // console.log(err.response)
          ToastsStore.error("User Does not Exits");
        });
    } else {
      // toast.error('Please fill all fields');
      ToastsStore.error('Please fill all fields');
    }
  }



  const handleChange = text => e => {
    setFormData({ ...formData, [text]: e.target.value });
  };


  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>

      {/* ------------- Navbar ------------- */}
      <div class="sticky-top">
        <Navbar />
      </div>


      <ToastsContainer store={ToastsStore}  position={ToastsContainerPosition.TOP_CENTER} />


      {/* -------------------------------- */}
      <div className="card-bg c-app c-default-layout flex-row justify-content-center ">

{/* <h1 className="">Name: {firstname}</h1> */}



{/* <div className=" d-flex justify-content-center"> */}

{/* <CContainer className="login-card"> */}



{/* <div className="card shadow-lg  "> */}
{/* <img className="card-img-top" src="..." alt="Card image cap" /> */}
{/* <div className="card-body " md="5"> */}

<div className="card" >

  <h5 className="card-title mt-3"><h1 className="tittle-login text-center ">Welcome</h1>
    <p className="text-muted text-center">Please Enter Email To get Password Reset Link</p></h5>
  <div className="justify-content-center">
    <div md="" className="m-4" >
            
            <form
                className='needs-validation'
                onSubmit={handleSubmit(onSubmit)}

              >
                <CCol md="12" className="col-verify " >
                  <div className="form-group ">
                    <label className="" >
                      Email ID:
                      <span className="text-danger">*</span>
                          </label>
                    <input
                      type="email"
                      onChange={handleChange('email')}
                      value={email}
                      className="form-control input border-2 outline-none rounded-sm "
                      name="email"
                      // label="Password"
                      placeholder="Email ID"
                      // aria-required
                      required
                      minLength="3"
                      maxLength="30"
                      ref={register({
                        required: "Please Provide a Valid Email Id",

                      })}
                    />


                  </div>
                </CCol>
                <div className="text-center">
                  <CButton type='submit' className="verify-button ">
                    Submit
                </CButton>
                </div>
              </form>
            
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

export default ForgotPassword
