import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  CCreateElement,
  CSidebar,
  CSidebarBrand,
  CSidebarNav,
  CSidebarNavDivider,
  CSidebarNavTitle,
  CSidebarMinimizer,
  CSidebarNavDropdown,
  CSidebarNavItem,
  CImg
} from '@coreui/react'

// import CIcon from '@coreui/icons-react'

// sidebar nav config
import navigation from './_nav'

const TheSidebar = () => {
  const dispatch = useDispatch()
  const show = useSelector(state => state.sidebarShow)

  return (
    <CSidebar className="sidebbar"
      show={show}
      onShowChange={(val) => dispatch({ type: 'set', sidebarShow: val })}
    >
      <CSidebarBrand className="d-md-down-none" to="/dashboard">
        {/* <CIcon
          className="c-sidebar-brand-full"
          name="logo-negative"
          height={35}
        /> */}
        <CImg className="c-sidebar-brand-full"
          src={process.env.PUBLIC_URL + "/images/logs.png"}
          // src="../images/logs.png"
          height="50px"
        // className="mb-2"
        />

        <CImg className="c-sidebar-brand-minimized"
          src={process.env.PUBLIC_URL + "/images/lo.png"}
          // src="../images/logs.png"
          height="35px"
        // className="mb-2"
        />
        {/* <CIcon
          className="c-sidebar-brand-minimized"
          name="sygnet"
          height={35}
        /> */}
      </CSidebarBrand>
      <CSidebarNav>

        <CCreateElement
          items={navigation}
          components={{
            CSidebarNavDivider,
            CSidebarNavDropdown,
            CSidebarNavItem,
            CSidebarNavTitle
          }}
        />
      </CSidebarNav>
      <CSidebarMinimizer className="c-d-md-down-none" />
    </CSidebar>
  )
}

export default React.memo(TheSidebar)
