import React from 'react'
import { Link } from 'react-router-dom'


const Sidenav = () => {
  return (
    <div>
        <div style={{height:"100vh",width:"100%" }} className='bg-primary'>
             <Link to="/dashboard/profile"  className='text-white p-3 d-block'>Profile</Link>
             <Link to="/dashboard/card"  className='text-white p-3 d-block'>Change password</Link>
             <Link  className='text-white p-3 d-block'>Log out</Link>
        </div>
    </div>
  )
}

export default Sidenav