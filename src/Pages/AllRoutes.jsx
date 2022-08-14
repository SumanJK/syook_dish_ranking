import React from 'react'
import { Navigate, Route, Routes } from 'react-router'
import Home from './Home'
import Login from './Login'

const AllRoutes = () => {
  return (
    <div>
      <Routes>
      <Route path="/" element={<Navigate to="/login"/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/home' element={<Home/>} />
      </Routes>
    </div>
  )
}

export default AllRoutes