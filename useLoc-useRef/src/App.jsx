import React from 'react'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import ProtectedRouting from './pages/ProtectedRouting'
import Profile from './pages/Profile'
import Settings from './pages/Settings'
import { Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <center>
        <h2>useRef and useLoc app</h2>

        <Routes>
          <Route path='/' element={<Login/>}></Route>
        </Routes>
      
        <Routes element={<ProtectedRouting/>}>
          <Route to='dashboard' element={<Dashboard/>}></Route>
          <Route to='profile' element={<Profile/>}></Route>
          <Route to='settings' element={<Settings/>}></Route>
        </Routes>

      </center>
    </div>
  )
}

export default App
