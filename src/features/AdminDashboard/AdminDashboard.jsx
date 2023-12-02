import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function AdminDashboard() {
  return (
    <div>
        <h1>AdminDashboard</h1>
        <Link to="addhospital"><button className='btn btn-success'>Add Hospital</button></Link>
        <Outlet></Outlet>
    </div>
  )
}

export default AdminDashboard