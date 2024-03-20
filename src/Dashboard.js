import React from 'react'
import Navbar from './Navbar'
import Sidenav from './Sidenav'
import { Outlet } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div>
        <div style={{width:"100%",height:"100vh" }} className='d-flex  border' >
            <div style={{width:"30%"}}>
              <Sidenav/> 
            </div>
        <div style={{width:"70%", height:"100vh"}}>
          <Navbar/>
          <div>
             <h1>Body</h1>
             <Outlet/>
          </div>
        </div>
        </div>
        
    </div>
  )
}

export default Dashboard