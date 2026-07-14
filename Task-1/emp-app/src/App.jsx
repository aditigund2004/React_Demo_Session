import React, { use, useState } from 'react'
import { api } from './service'
import Login from './Login'

const App = () => {

  const [from, setForm] = useState({name : "", email: "", password: "" , role: "",})

  const [show, setShow] = useState(false)

  const handleSubmit = async(e)=>{
    e.preventDefault()

    console.log(from)

    await api.post(`users`,from)

    // setShow(true)
   

    setForm({name : "", email: "", password: "" , role: "",})
    
  }

  const handleInput = (e)=>{
    const{name, value} = e.target 
    setForm({...from, [name]: value})


  }
  return (
    <div>
      <center>
        { !show ? ( 
          <>
        <h3>Register Page</h3>

        <form onSubmit={handleSubmit}>
          name : <input type="text" name = 'name' value = {from.name} onChange={handleInput} required /><br></br> <br></br>
          Email : <input type="text" name = 'email' value = {from.email} onChange={handleInput} required /><br></br> <br></br>
          password : <input type="text" name = 'password' value = {from.password} onChange={handleInput} required /><br></br> <br></br>
          role : <input type="text" name = 'role' value = {from.role} onChange={handleInput} required /><br></br> <br></br>

          <button>Register</button><br></br><br></br>
        </form>

        <button onClick={() => setShow(true)}> Login </button>
        </>
        ) : (
        <button back= { ()=> setShow(false)}/>

       )}
      </center>
      
    </div>
  )
}

export default App
