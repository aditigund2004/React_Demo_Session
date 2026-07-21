import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const LoginPage = () => {

    const [from, setFrom] = useState({email: "", password:""})

    const navigateme = useNavigate()

    const handleSubimt = (e)=>{
        e.preventDefault()

        console.log(from)
        

        if(from.email === 'ram@gmail.com' && from.password === '123'){
            navigateme('/dashboard')
            return ;
        }
        else{
            alert("invalid credential")
        }
    }

    const handleInput =(e)=>{
        const {name, value} = e.target
        setFrom({...from, [name]:value})
    }
  return (
    <div>
      
      <form onSubmit={handleSubimt}>
        Email : <input type="text" name='email' value={from.email} onChange={handleInput} required/><br></br><br></br>
        Password : <input type="text" name='password' value={from.password} onChange={handleInput} required/><br></br><br></br>

        <button>Login here...</button>
      </form>
    </div>
  )
}

export default LoginPage