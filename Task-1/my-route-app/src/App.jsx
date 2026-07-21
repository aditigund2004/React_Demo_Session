import React, { useState } from 'react'
import Mobiles from './pages/Mobiles'
import Fashion from './pages/Fashion'
import Electronics from './pages/Electronics'
import { Route, Routes } from 'react-router-dom'
import Hoomepage from './pages/Hoomepage'
import Navbar from './components/Navbar'
import Login from './Login'
import Dashboard from './pages/Dashboard'
import ProtectedRoute from './ProtectedRoute'


const App = () => {

  return (
    <div>
      <center>
        <h1>MyAmazon app</h1>

        <Navbar /> <br /><br />

        <Routes>

          <Route path='/' element={<Hoomepage />} />
          <Route path='mobiles' element={<Mobiles />} />
          <Route path='fashion' element={<Fashion />} />
          <Route path='electronics' element={<Electronics />} />
          <Route path='login' element={<Login />} />

          <Route path='dashboard' element={
              <ProtectedRoute>
                <Dashboard/>
              </ProtectedRoute>
          } />


        </Routes>
      </center>
    </div>
  )
}

export default App
