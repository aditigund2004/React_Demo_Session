import React, { useState } from 'react'
import { api } from '../services'
import Admin from './Admin'

const Login = () => {

    const [from, setForm] = useState({ email: '', password: '', role: ''})

    const handleSubmit = (e)=>{
        e.preventDefault()

        api.get(`/`)
        .then( (res)=>{
            const users = res.data

            const user = users.find( (u) => u.email == from.email);

            if(!user){
                alert("user not found");
                return;
            }

            if(user.password == from.password){

                if(user.role == 'admin'){
                    return <Admin/>
                }
                else{
                     return <User/>
                }
            }
            else{
                alert("invalid password")
            }
    })
    .catch( (err) => console.log(err))
    }

    const handleInput = (e)=>{
        const {name, value} = e.target
        setForm({...from, [name]: value});
    };

  return (
    <div>
        <center>
            <h3>Login form</h3>
            <form onSubmit={handleSubmit}>

                email : <input type="text" name = 'email' value={from.emial} onChange={handleInput} required/><br></br><br></br>
                password : <input type="text" name = 'password' value={from.password} onChange={handleInput} required/><br></br><br></br>
                role : <select name="role" value={from.role} onChange={handleInput}>
                    <option value="user">user</option>
                    <option value="admin">admin</option>

                </select>
                <br></br>

                <button>Login here</button>

            </form>
        </center>
      
    </div>
  )
}

export default Login
