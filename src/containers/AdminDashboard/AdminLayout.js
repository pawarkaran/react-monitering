import React from 'react'
import {
  
  
  TheFooter,
  TheHeader
} from '../index'
import AdminContent from './AdminContent'
import AdminSidebar from './AdminSidebar'

const AdminLayout = ({setAuth}) => {

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

export default AdminLayout