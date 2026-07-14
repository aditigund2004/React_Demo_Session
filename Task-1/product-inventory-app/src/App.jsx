import React, { useState } from 'react'
import { api } from './services'

const App = () => {

  const [login, setLogin] = useState({name:"", email: "", password: "", role: ""})

  const handleSubmit = (e)=>{
    e.preventDefault()

    api.post(`users`,login)
    .then( (res)=>{
      setLogin(res.data)
      setLogin({name:"", email: "", password: "", role: ""})

    })

    setLogin({name:"", email: "", password: "", role: ""})
  }
  

  const handleInput = (e)=>{
    const{name,value} = e.target 
    setLogin({...login, [name]: value})
  }

  return (
    <div> { !show ? (  
      <>
      <h2>Register Page</h2>
      <form onSubmit={handleSubmit}>
        name : <input type="text" name="name" value={login.name} onChange={handleInput} required/><br></br><br></br>
        email : <input type="text" name="email" value={login.email} onChange={handleInput} required/><br></br><br></br>
        password : <input type="text" name="password" value={login.password} onChange={handleInput} required/><br></br><br></br>
        role : <input type="radio" name="role" value="manager" checked={login.role === 'manager'} onChange={handleInput} required/>Manager<br></br><br></br>
               <input type="radio" name="role" value="satff" checked={login.role === 'staff'} onChange={handleInput} required/>Staff<br></br><br></br>

        <button>Register here</button><br></br><br></br>
         </form>

        <button onClick={ ()=> setShow(true)}>Login</button>
        </>
     
      ) : (
        <button back = { () => setShow(false)}> </button>
      )
      
      }
      
    </div>
  )
}

export default App
