import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {

    const [login , setLogin] =useState({email:"", password: ""})

    const handleInput = (e) =>{
        const{name, value} = e.target
        setLogin({...login, [name]: value})

    }

    const nav = useNavigate();


    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log(login)

        if(login.email == 'ram@gmail.com' && login.password == '123'){
            localStorage.setItem('isLogin', 'yes')
        }
        else{
            localStorage.setItem('isLogin', 'no')
        }

        nav('/dashboard')
    }
  return (
    <div>
        <center>
            <form onSubmit={handleSubmit}>
                email: <input type="text" name='email' value={Login.email} onChange={handleInput} required/> <br></br><br></br>
                password: <input type="text" name='password' value={Login.password} onChange={handleInput} required/> <br></br><br></br>

                <button> Login here..</button>
            </form>
        </center>
      
    </div>
  )
}

export default Login
