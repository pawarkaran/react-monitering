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
  // import { toast } from 'react-toastify';
import { ToastsContainer, ToastsContainerPosition, ToastsStore } from 'react-toasts';

const ForgotPassword = () => {

    const [formData, setFormData] = useState({
        email: "",        
      });
      const { email } = formData;
    
    
      const { register, handleSubmit, errors } = useForm();
    

      const onSubmit = async (data, e) => {
        e.preventDefault();
        console.log(data)
        if (email) {
          setFormData({ ...formData,  });
          axios
            .put(`http://localhost:5000/password/forgotpassword`, {
              email
            })
            .then (res => {
              
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
  <CLink className="navbar-12 pr-3 pl-3 text-decoration-none"><span className="navbar-12"></span></CLink>



            </CNavbarNav>
            <CNavbarNav className=" ml-auto text-center d-flex justify-content-center">
              <CLink href="/#/login" className="nav-righty text-white ml-3 mr-3 text-decoration-none "><span className="nav-righty">Login </span></CLink>
              <CLink href="/#/register" className="nav-righty text-white ml-3 mr-3  text-decoration-none"><span className="nav-righty">Sign Up </span></CLink>


            </CNavbarNav>
          </CCollapse>
        </CNavbar>

      </div>

        <ToastsContainer store={ToastsStore} position={ToastsContainerPosition.TOP_RIGHT}/>


     {/* -------------------------------- */}
     <div className="verify-email-bg c-app c-default-layout flex-row   ">
            <CContainer className="verify-email" >
            <div className="card-verify card border-right-0 shadow-lg pt-3 pr-5  pl-5">
    <h3 className="text-center text-white  ">Welcome</h3>
                <p className="card-text text-center text-white p-4 ">Write your email id here to get email to reset password</p>
                <div className="justify-content-center">
                    <form
                       className='needs-validation'
                       onSubmit={handleSubmit(onSubmit)}
                                        
                    >
                        <CCol md="9" className="col-verify " >
                        <div className="form-group ">
                        <label className="text-white" >
                           Email ID: 
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
                </div>
              </div>
                
            </CContainer>
        </div>

            
            
        
        </div>
    )
}

export default ForgotPassword
