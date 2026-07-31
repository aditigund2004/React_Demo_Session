import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashbaord from './pages/Dashbaord'

const App = () => {
  return (
    <div>

      <h3>Multiple Protect routing App</h3>

      <Routes>
        <Route path='/' element={<Dashbaord/>}/>
      </Routes>
      
    </div>
  )
}

export default App
