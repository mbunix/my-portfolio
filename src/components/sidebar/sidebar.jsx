import React from 'react'
import {NavLink} from 'react-router-dom'
import {
 CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact'
function Sidebar() {
  return (
      <div>
          <CDBSidebar>
              <CDBSidebarHeader>
                  <CDBSidebarContent>
                      <CDBSidebarMenu>
                          <CDBSidebarMenuItem>
                              <NavLink to='/'>Home</NavLink>
                          </CDBSidebarMenuItem>
                          <CDBSidebarMenuItem>
                              <NavLink to='/services'>Services</NavLink>
                          </CDBSidebarMenuItem>
                          <CDBSidebarMenuItem>
                              <NavLink to='/about'>About</NavLink>
                          </CDBSidebarMenuItem>
                      </CDBSidebarMenu>
                  </CDBSidebarContent>
              </CDBSidebarHeader>
          </CDBSidebar>
    </div>
  )
}

export default Sidebar
