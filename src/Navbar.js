import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
        <div style={{width:"100%", height:"80px" }} className='d-flex justify-content-between align-items-center shadow bg-white border  px-3 py-2'>
            <h1 className='fs-1 '>React Class</h1>

            <div className='p-4'>
                <Link to="/">Home</Link>
            <a href="">dashboard</a>
            <a href="">Login</a>
            <a href="">Contact us</a>
            </div>
            <button>Register</button>
        </div>
    </div>
  )
}

export default Navbar