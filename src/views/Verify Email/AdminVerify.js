import React, { useEffect, useState } from 'react'
import axios from 'axios';
import jwt from 'jsonwebtoken';
import {
    CButton,
    CCol,
    CContainer,
    CCollapse, CNavbar, CNavbarBrand, CNavbarNav, CToggler,
  
     CLink, CImg
  } from '@coreui/react'
  import './email.scss'; 
import { toast, ToastContainer } from 'react-toastify';
import { ToastsContainer, ToastsContainerPosition, ToastsStore } from 'react-toasts';

  

const AdminEmailverify = ({ match }) => {





    const [formData, setFormData] = useState({
        firstname: '',
        token: '',
        // show: true
      });
    
    useEffect(() => {
        let token = match.params.token;
        let { firstname } = jwt.decode(token);
    
        if (token) {
          setFormData({ ...formData, firstname, token });
        }
    
        console.log(token, firstname);
      },
       [match.params]
       );
      const { firstname, token} = formData;
    
      const handleSubmit = async (e) => {
        e.preventDefault();
    
        ToastsStore.success("Account activated please login")
    axios
    .post(`http://localhost:5000/admin/adminverify/`, {
      token
    })
    .then(res => {
      console.log("asdad");
      setFormData({
        ...formData,
        // show: false
      });

      ToastsStore.success("Account activated please login")
    })
    .catch(err => {
      
      ToastsStore.error("Account activated please login")
    });
};




const [isOpen, setIsOpen] = useState(false);

    return (
        <div>



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
              <CLink href="/#/admin/admin-login" className="nav-righty text-white ml-3 mr-3 text-decoration-none "><span className="nav-righty">Admin Login </span></CLink>
              <CLink href="/#/admin/admin-register" className="nav-righty text-white ml-3 mr-3  text-decoration-none"><span className="nav-righty">Admin Sign Up </span></CLink>


            </CNavbarNav>
          </CCollapse>
        </CNavbar>

      </div>

      <ToastsContainer store={ToastsStore} position={ToastsContainerPosition.TOP_RIGHT} />



        <div className="verify-email-bg text-center c-app c-default-layout flex-row justify-content-center  ">
            <CContainer className="verify-email " >
            <div className="card-verify card border-right-0 shadow-lg pt-5 ">
    <p className="card-text text-center text-white  ">Welcome {firstname}</p>
                <p className="card-text text-center text-white p-2 ">You Are One Step Further From Joining</p>
                <div className="justify-content-center">
                    <form
                    onSubmit={handleSubmit}                    
                    >
                        <CCol md="9" className="col-verify justify-content-center text-center" >
                        <div className="form-group justify-content-center ">
                       


                        </div>
                        </CCol>
                <CButton type='submit' className="verify-button">
                    Activate here
                </CButton>
                
                </form>
                </div>
              </div>
                
            </CContainer>
        </div>

            
            
        </div>
    )
}

export default AdminEmailverify
