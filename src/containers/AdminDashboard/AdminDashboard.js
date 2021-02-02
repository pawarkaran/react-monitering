import React from 'react'
import { AdminContent, AdminTheHeader, TheFooter } from './AdminIndex'
import AdminSidebar from './AdminSidebar'



const AdminDashboard = ({ setAuth }) => {

  return (
    <div className="c-app c-default-layout">
      <AdminSidebar/>
      <div className="c-wrapper">
        <AdminTheHeader/>
        <div className="c-body">
          <AdminContent/>
        </div>
        <TheFooter/>
      </div>
    </div>
  )
}

export default AdminDashboard
