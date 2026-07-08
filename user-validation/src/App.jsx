import React, { useEffect, useState } from 'react'
// import {api} from './service'

import api from "./service";
import StudentData from './StudentData';
import FacultyData from './FacultyData';

const App = () => {

  const [form, setForm]=useState({email : "", password : ""})

  const [role, setRole] =useState(null)

  const [show, setshow] =useState(null)

  const HandleInput = (e) =>{
    const {name, value} = e.target
    setForm({...form, [name] : value})

  }

  const handleSubmit = async (e)=>{
    // console.log(import.meta.env.VITE_API_URL);
    e.preventDefault()
    // console.log(form)


    let all = await api.get('/users')
    .then( (res) =>{
      return res.data
    })

    all.map( (user)=> {
      if (user.email === form.email && user.password === form.password) {
        setRole(user.role)
        setshow(true)
      } 

    })

    setForm({email : "", password : ""})
  }

  
  return (
    <div>
      <center>
        <h2>Login App</h2>
        
        <form onSubmit={handleSubmit}>

        Email : <input type='text' name='email' value = {form.email} onChange={HandleInput} required/><br></br><br></br>
        Password : <input type='text' name='password' value = {form.password} onChange={HandleInput} required/><br></br><br></br>

        <button type='submit'>Login</button>
        
        </form>
         {/* <h2>
          {show 
          && role ==='admin' 
          ? <StudentData/> 
          : role === 'user' 
          ? <FacultyData/> 
          : ''

          }
         </h2> */}
          {role === "admin" && <StudentData />}

          {role === "faculty" && <FacultyData />}

         
      </center>
      
    </div>
  )
}

export default App
