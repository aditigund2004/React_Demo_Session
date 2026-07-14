import React, { useState } from 'react'
import { api } from './services'
import ManagerDashboard from './ManagerDashboard'
import StaffDashboard from './StaffDashboard'

const Login = () => {

    const [login, setLogin]= useState({email: "", password: ""})
    const [show, setShow]= useState(false)
    const [role, setRole] = useState( "")
    const [invalid, setInavlid] = useState( false)

    const handleSubmit =async (e)=>{
      e.preventDefault()

      try {
      const res = await api.get(`users`);
      let found = false;

      res.data.map( (u)=>{
        if(u.email === login.email && u.password === login.password){
          setRole(u.role)
          found = false
        }
      })
      if(found){
        setShow(true)
        setInavlid(false)
      }
      else{
        setShow(false)
        setRole( "")
        setInavlid(true)
      }

      setLogin({email: "", password: ""})


      }catch (err){
        console.log(err)

      }

      if(show && role ==='manager'){
        return <ManagerDashboard/>
      }

      if (show && role === 'staff'){
        return <StaffDashboard/>
      }


    }

    const handleInput=(e)=>{
      const{name, value} =e.target 
      setLogin({...Login, [name]: value})
    }

  return (
    <div>
        <h2>Login Page</h2>
      <form onSubmit={handleSubmit}>
       
        email : <input type="text" name="email" value={login.email} onChange={handleInput} required/><br></br><br></br>
        password : <input type="text" name="password" value={login.password} onChange={handleInput} required/><br></br><br></br>
       
        <button>Login here</button>

        { invalid && <p> invalid email and password</p>}
        
      </form>
      
    </div>
  )
}

export default Login
