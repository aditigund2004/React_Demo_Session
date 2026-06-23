import React, { useState } from 'react'

const Login = () => {
    const [login, setLogin] = useState({email : '', password : ''})
    // create state of password to hide and show to set password variable and set dymanic data into password variable using setpasswordshow
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit= (e) =>{
        e.preventDefault();
        console.log(login)
        console.log(showPassword)
        setLogin({email : '', password : ''})
    }

    const handleForm = (e) => {
        const {name, value} = e.target;
        setLogin ({...login, [name]: value})
    }
  return (
    <div>
        <center>
            <form onSubmit={handleSubmit}>
            Email : <input type = 'text' name= 'email' value = {login.email} onChange={handleForm} required/><br></br><br></br>
            Password : <input type ={showPassword ? "text" : "password"} name= 'password' value = {login.password} onChange={handleForm} required/><br></br><br></br>

            <button type='button' onClick={()=> setShowPassword(!showPassword)}>{showPassword ? "hide password" : "show password"}</button><br></br><br></br>

            <button type='submit'>Login</button>
      
        </form>
        </center>
    </div>
  )
}

export default Login
