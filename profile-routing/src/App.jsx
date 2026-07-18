import React from 'react'
import Navbar from './components/Navbar'
import ProtectedRoute from './ProtectedRoute'
import Dashboard from './pages/Dashboard'
import { Route, Routes } from 'react-router-dom'
  
import Login from './Login'
import Profile from './pages/Profile'
import ProfileSettings from './pages/ProfileSettings'

const App = () => {
  return (
    <div>
      <center>
        <h2>Login profile routing wit logout button</h2>
      </center>


        <Navbar />
          <Routes>
            <Route path='login' element={<Login />}/>

            <Route path = 'dashboard' element={
              <ProtectedRoute>
                <Dashboard/>
              </ProtectedRoute>
            } />
                <Route path="profile" element={<Profile />} />
                <Route path="profilesetting" element={<ProfileSettings />} />

          </Routes>

      
    </div>
  )
}

export default App
