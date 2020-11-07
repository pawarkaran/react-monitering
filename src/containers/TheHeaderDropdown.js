import React, { useEffect, useState } from 'react'
import {
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'

import { Redirect, useHistory } from "react-router-dom";
import { ToastsStore } from 'react-toasts';

// import { toast } from 'react-toastify';


const TheHeaderDropdown = ({ setAuth }) => {



  // ---------------------- API --------------------------
  const [firstname, setName] = useState("");
  const [lastname, setLastname] = useState("");


  const getProfile = async () => {
    try {
      const res = await fetch("http://164.52.201.141:3005/dashboard", {
        method: "GET",
        headers: { jwt_token: localStorage.token }
      });

      const parseData = await res.json();
      setName(parseData.user_firstname);
      setLastname(parseData.user_lastname);
    } catch (err) {
      console.error(err.message);
    }
  };

  const logout = async e => {

    // e.preventDefault();
  
    localStorage.removeItem("token");

    // toast.success("Logout successfully");
    ToastsStore.success("Logged in Seccessfully")
    console.log("after");
  };
  let history = useHistory();
  const his = async => {
    history.push("/")
    window.location.reload(false);
    console.log("prssed history");
  }

  useEffect(() => {
    getProfile();
  }, []);

  // --------------------------------



  return (
    <CDropdown
      inNav
      className="c-header-nav-items mx-2"
      direction="down"
    >
      <CDropdownToggle className="c-header-nav-link" caret={false}>
        <div className="c-avatar">
          {/* <CImg
            src={'avatars/6.jpg'}
            className="c-avatar-img"
            alt="admin@bootstrapmaster.com"
          /> */}
          {/* <CIcon name="cil-user" size="xl" className="mfe-2"  /> */}
          <p className="mfe-4 text-center pt-1 ">{firstname} {lastname}</p>
        </div>
      </CDropdownToggle>
      <CDropdownMenu className="pt-0" placement="bottom-end">
        <CDropdownItem
          header
          tag="div"
          color="light"
          className="text-center"
        >
          <strong>Account</strong>
        </CDropdownItem>
        <CDropdownItem>

        </CDropdownItem>

        {/* <CDropdownItem>
 
          Comments
          <CBadge color="warning" className="mfs-auto">42</CBadge>
        </CDropdownItem> */}
        {/* <CDropdownItem
          header
          tag="div"
          color="light"
          className="text-center"
        >
          <strong>Settings</strong>
        </CDropdownItem> */}
        <CDropdownItem>
          <CIcon name="cil-user" className="mfe-2" />Profile
        </CDropdownItem>
        <CDropdownItem>
          <CIcon name="cil-settings" className="mfe-2" />
          Settings
        </CDropdownItem>
        <CDropdownItem>
          {/* <CIcon name="cil-credit-card" className="mfe-2" /> 
          Payments
          <CBadge color="secondary" className="mfs-auto">42</CBadge>
        </CDropdownItem>
        <CDropdownItem>
          <CIcon name="cil-file" className="mfe-2" /> 
          Projects
          <CBadge color="primary" className="mfs-auto">42</CBadge> */}
        </CDropdownItem>
        <CDropdownItem divider />
        <CDropdownItem>
          <CIcon name="cil-lock-locked" className="mfe-2" onClick={logout} />
          <span onClick={() => { logout(); his(); }}>Logout</span>
        </CDropdownItem>
      </CDropdownMenu>
    </CDropdown>
  )
}

export default TheHeaderDropdown
