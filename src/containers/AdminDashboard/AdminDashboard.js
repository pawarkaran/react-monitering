import React from 'react'
import { TheFooter, TheHeader, TheSidebar } from '../AdminDashboard/AdminIndex'
import AdminContent from './AdminContent'
import AdminSidebar from './AdminSidebar'


const AdminDashboard = ({ setAuth }) => {

  return (
    <div className="c-app c-default-layout">
      <AdminSidebar/>
      <div className="c-wrapper">
        <TheHeader/>
        <div className="c-body">
          <AdminContent/>
        </div>
        <TheFooter/>
      </div>
    </div>
  )
}

export default AdminDashboard
