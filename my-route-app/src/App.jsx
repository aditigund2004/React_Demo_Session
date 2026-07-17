import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Electronics from './pages/Electronics'
import Mobile from './pages/Mobile'
import Home from './pages/Home'
import Kids from './pages/Kids'
import Fashion from './pages/Fashion'
import Navbar from './components/Navbar'


const App = () => {
  return (
    <div>

      <h1>Shopping Site😇🤓</h1>

      <Navbar/>

      <Routes>

        <Route path='/' element ={<Home/>}/> 
        <Route path='mobiles' element ={<Mobile/>}/>
        <Route path='electronics' element ={<Electronics/>}/>
        <Route path='kids' element ={<Kids/>}/>
        <Route path='fashion' element ={<Fashion/>}/>
      </Routes>
      
    </div>
  )
}

export default App
