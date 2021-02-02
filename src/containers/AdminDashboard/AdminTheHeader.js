import React, { } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  CHeader,
  CToggler,
  CHeaderBrand,
  CHeaderNav,
  CHeaderNavItem,
  CHeaderNavLink,
  CSubheader,
  CBreadcrumbRouter,
  CLink, CImg
} from '@coreui/react'
// import CIcon from '@coreui/icons-react'

// routes config


import { 
  AdminTheHeaderDropdown,
  // TheHeaderDropdownMssg,
  // TheHeaderDropdownNotif,
  // TheHeaderDropdownTasks
}  from './AdminIndex'
import AdminRoutes from './AdminRoutes'



const AdminTheHeader = () => {

  const dispatch = useDispatch()
  const sidebarShow = useSelector(state => state.sidebarShow)

  const toggleSidebar = () => {
    const val = [true, 'responsive'].includes(sidebarShow) ? false : 'responsive'
    dispatch({type: 'set', sidebarShow: val})
  }

  const toggleSidebarMobile = () => {
    const val = [false, 'responsive'].includes(sidebarShow) ? true : 'responsive'
    dispatch({type: 'set', sidebarShow: val})
  }

  return (
    <CHeader withSubheader>
      <CToggler
        inHeader
        className="ml-md-3 d-lg-none"
        onClick={toggleSidebarMobile}
      />
      <CToggler
        inHeader
        className="ml-3 d-md-down-none"
        onClick={toggleSidebar}
      />
      <CHeaderBrand className="mx-auto d-lg-none" to="/">
        {/* <CIcon name="logo" height="48" alt="Logo"/> */}
        <CImg
      src={process.env.PUBLIC_URL +"/images/logs.png"}
      // src="../images/logs.png"
      height="50px"
      // className="mb-2"
    />
      </CHeaderBrand>
      
  
  
      <CHeaderNav className="d-md-down-none mr-auto">
        <CHeaderNavItem className="px-3" >
          <CHeaderNavLink className="text-muted" to="/dashboard">Dashboard</CHeaderNavLink>
        </CHeaderNavItem>
        
        <CHeaderNavItem  className="px-3">
          {/* <CHeaderNavLink to="/users">Users</CHeaderNavLink> */}
        </CHeaderNavItem>
        <CHeaderNavItem className="px-3">
          {/* <CHeaderNavLink>Settings</CHeaderNavLink> */}
        </CHeaderNavItem>
      </CHeaderNav>

      <CHeaderNav className="px-3">
        {/* <TheHeaderDropdownNotif/> */}
        {/* <TheHeaderDropdownTasks/> */}
        {/* <TheHeaderDropdownMssg/> */}
        <AdminTheHeaderDropdown/>
      </CHeaderNav>
       
      <CSubheader className="px-3 justify-content-between text-muted">
        <CBreadcrumbRouter 
          className="border-0 c-subheader-nav m-0 px-0 px-md-3 text-muted" 
          routes={AdminRoutes} 
        />



        {/* <CLink href="/login" className="text-muted font-xl">Login</CLink>
        <CLink href="/register" className="text-muted font-xl">Register</CLink> */}


          <div className="d-md-down-none mfe-2 c-subheader-nav">
            <CLink className="c-subheader-nav-link"href="#">
              {/* <CIcon name="cil-speech" alt="Settings" /> */}
            </CLink>
            <CLink 
              className="c-subheader-nav-link text-muted text-decoration-none" 
              aria-current="page" 
              to="/dashboard"
            >
              {/* <CIcon name="cil-graph" alt="Dashboard" />&nbsp;Dashboard */}
            </CLink>
            <CLink className="c-subheader-nav-link" href="#">
              {/* <CIcon name="cil-settings" alt="Settings" />&nbsp;Settings */}
            </CLink>
          </div>
      </CSubheader>
    </CHeader>
  )
}

export default AdminTheHeader
