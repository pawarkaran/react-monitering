import React from 'react'
import {
  
  
  TheFooter,
  
} from '../index'
import AdminContent from './AdminContent'
import { AdminTheHeader } from './AdminIndex'
import AdminSidebar from './AdminSidebar'

const AdminLayout = ({setAuth}) => {

  return (
    <div className="c-app c-default-layout" style={{backgroundColor: "#eceff1"}}>
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

export default AdminLayout