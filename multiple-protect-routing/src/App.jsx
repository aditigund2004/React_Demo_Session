import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Profile from './pages/Profile'
import Dashboard from './pages/Dashboard'
import ProtectedRoute from './ProtectedRoute'
import Login from './Login'
import Navbar from './components/Navbar'
import Settings from './pages/Settings'

const App = () => {
  return (
    <div>
      <center>
        <h1>Multiple Protect Routing </h1>
        <Navbar />

        <Routes>
          <Route path='login' element={<Login />} />
          <Route element={<ProtectedRoute />}>
            <Route path='dashboard' element={<Dashboard />} />
            <Route path='profile' element={<Profile />} />
            <Route path='settings' element={<Settings />} />
          </Route>
        </Routes>

      </center>
    </div>
  )
}

export default App