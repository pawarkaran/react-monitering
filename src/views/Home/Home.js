import { CButton, CCol, CCollapse, CContainer, CImg, CLink, CNavbar, CNavbarBrand, CNavbarNav, CNavLink, CRow, CToggler, CWidgetDropdown } from '@coreui/react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './home.scss';
import { Link as Scroll } from 'react-scroll';
import { FooterMain } from '../Footer/FooterMain';
import { Navbar } from '../Navbar/Navbar';


const Home = ({ }) => {


  return (
    <div className="">


{/* ------------------------- Navbar new ---------------------- */}
<div className="sticky-top">
<Navbar />
</div>
{/* --------------------------------------------------------- */}




      <div className="start-body">

        {/* ---------------Navbar------------- */}
        {/* <div className="navbar-start">
          <CNavbar expandable="sm" className="navbar-home p-2 sticky-top sticky " >
            <CToggler inNavbar onClick={() => setIsOpen(!isOpen)} />
            <CNavbarBrand className="navbar-brand "  >
              <a href="/"  className="text-decoration-none">
                <CImg
                  src={process.env.PUBLIC_URL + "/images/logs.png"}
                 
                  height="50px"
               
                />
              </a>
            </CNavbarBrand>
            <CCollapse show={isOpen} navbar>
              <CNavbarNav className="navbar-text text-center">
                <CLink href="/" className="navbar-12 pr-3 pl-3 text-decoration-none" ><span className="navbar-12">Home</span></CLink>
         
                <CLink className="navbar-12 pr-3 pl-3 text-decoration-none"><span className="navbar-12">Contact</span></CLink>
           


              </CNavbarNav>
              <CNavbarNav className=" ml-auto text-center d-flex justify-content-center">
                <CLink href="/#/login" className="nav-righty text-white ml-3 mr-3 text-decoration-none "><span className="nav-righty">Login </span></CLink>
                <CLink href="#/register" className="nav-righty text-white ml-3 mr-3  text-decoration-none"><span className="nav-righty">Sign Up </span></CLink>


              </CNavbarNav>
            </CCollapse>
          </CNavbar>

        </div> */}

        {/* _---------------------- */}




        <div className="home-body ">
          <div className="start-body" fluid>
            <CContainer className="start-container m-auto" >
              <CRow clasname="head-start  m-auto">
                <CCol className=" m-auto" md="6" >
                  <p className="col-start text" >Great Companies are:
                  <h4 class="wordCarousel ">    
        {/* <span className="">Great Companies are: </span>   */}
        <div> 
{/* <!--        Use classes 2,3, or 4 to match the number of words -->  */}

            <ul class="flip4"> 
                <li>Always On</li>
                <li>Reliable</li>
                <li>Resposnible</li> 
                <li>Awesome</li>  
            </ul>
        </div>  
    </h4>
                  </p>

                  <p className="col-para">Devop's end-to-end incident alerting, on-call management
                     and response of the platform which helps you in reliability into your production operations </p>
                  <Link to="/login" className="a-button">
                    <CButton className="start-button">Login Here</CButton>
                  </Link>
                  <Link to="/register" className="a-button">
                    <CButton className="start-button2">Create Account</CButton>
                  </Link>
                </CCol>
                <CCol className="m-auto " md="5">
                  <CImg className="card-img-top p-3 pb-5 mb-5 mt-5" src={process.env.PUBLIC_URL + "/images/landingpage.webp"} alt="Card image cap" />
                </CCol>
              </CRow>

            </CContainer>
          </div>
        </div>


      </div>

{/* ------------------------------------------ */}



      <div className="main-body-home c-app c-default-layout flex-row justify-content-center ">

        {/*         
      <div className={'row mt-2'}>
      <div className={'col-12'}> */}
        <CContainer className="mt-3">
          <CRow className="home-container mt-3 ml-1 mr-1 shadow-lg">
            <CCol md="6" className=" text-center m-3 mt-5">
              <p className="home-cp">Manage all your production alert in one place</p>
              <p className="home-cp2 text-white ">Integrate with 100+ monitoring tools and manage all your production alerts from a unified incident dashboard.</p>
            </CCol>
            <CCol md="5" className="mt-5 m-auto">

              <CImg className="card-img-top home-image1 p-3 " src={process.env.PUBLIC_URL + "/images/logo-collage.webp"} alt="Card image cap" />
            </CCol>


          </CRow>
          <CRow className="home-container1 mt-5 mb-2 ml-1 mr-1 shadow-lg">
            <CCol md="6" className="text-center m-3 mt-5">
              <p className="home-cp"> Escalate alerts to the right people </p>
              <p className="home-cp2 text-white ">Respond to incidents faster by escalating critical alerts to the right teams via SMS,
              Phone, Microsoft Teams, Android/iOS push notifications and Email.</p>
              {/* Automatically bring in the relevant subject matter experts and stakeholders into the incident response process</p> */}
            </CCol>
            <CCol md="5" className="mt-5 m-auto">

              <CImg className="card-img-top home-image2 mb-3 mt-3" src={process.env.PUBLIC_URL + "/images/escalation-policy.webp"} alt="Card image cap" />
            </CCol>


          </CRow>

          <CRow className="home-container1 mt-5 mb-5 ml-2 mr-1 shadow-lg">
          <CCol md="6" className="text-center ml-3 mt-5">
              <p className="home-cp"> Build a solid on-call culture now</p>
              <p className="home-cp2 text-white mr-3 ">Deploy customized and data-driven on-call rotations to implement 24x7 operational coverage.</p>
              {/* Automatically bring in the relevant subject matter experts and stakeholders into the incident response process</p> */}
            </CCol>
            <CCol md="5" className="mt-5 m-auto">

              <CImg className="card-img-top home-image2 mb-3 mt-3" src={process.env.PUBLIC_URL + "/images/schedule-call.webp"} alt="Card image cap" />
            </CCol>


          </CRow>

        </CContainer>


      </div>





{/* -----------------------------Footer --------------------- */}

<FooterMain />

    </div>
  )
}

export default Home
