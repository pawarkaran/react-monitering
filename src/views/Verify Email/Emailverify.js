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
import { ToastsContainer, ToastsContainerPosition, ToastsStore } from 'react-toasts';
import { useHistory } from 'react-router-dom';
import { Navbar } from '../Navbar/Navbar';
import { FooterMain } from '../Footer/FooterMain';




const Emailverify = ({ match }) => {



  let history = useHistory();

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

    // console.log(token, firstname);
  }, [match.params]
  );
  const { firstname, token } = formData;

  const handleSubmit = async (e) => {
    e.preventDefault();
   try {
     
   
    // ToastsStore.success("Account Acivated please login");
    axios
      .post(`http://164.52.201.141:3005/verification/`, {
        token
      })
      .then(res => {
        
        ToastsStore.success("Account Acivated please login")

        console.log("33333");
        setFormData({
          ...formData,
          // show: false
        });

      })
      .catch(err => {
        // console.log("errp");
        ToastsStore.error("Something went wrong register again")
      })

    } catch (error) {
      // console.log("errp");
      ToastsStore.error("Something went wrong register again")
    }
  }





  return (
    <div>




      <div className="sticky-top">
      <Navbar />
      </div>


      <ToastsContainer store={ToastsStore} position={ToastsContainerPosition.TOP_RIGHT} />


      {/* {firstname} */}
      {/* <div className="verify-email-bg text-center c-app c-default-layout flex-row justify-content-center  ">
        <CContainer className="verify-email " >
          <div className="card-verify card border-right-0 shadow-lg pt-5 ">
            <p className="card-text text-center text-white  ">Welcome </p> 
            <p className="card-text text-center text-white p-2 ">You Are One Step Further From Joining</p>
            <div className="justify-content-center"> */}

<div className="card-bg c-app c-default-layout flex-row justify-content-center ">

{/* <h1 className="">Name: {firstname}</h1> */}



{/* <div className=" d-flex justify-content-center"> */}

{/* <CContainer className="login-card"> */}



{/* <div className="card shadow-lg  "> */}
{/* <img className="card-img-top" src="..." alt="Card image cap" /> */}
{/* <div className="card-body " md="5"> */}

<div className="card" >

  <h5 className="card-title mt-3"><h1 className="tittle-login text-center ">Welcome, {firstname} </h1>
    <p className="text-muted text-center">You Are One Step Further From Joining</p></h5>
  <div className="justify-content-center">
    <div md="" className="m-4 text-center" >

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

            {/* </div>
          </div>

        </CContainer>
      </div> */}

{/* -------------------------- Footer ------------------- */}
<FooterMain />
{/* ------------------------------------------- */}
    </div>
  )
}

export default Emailverify
