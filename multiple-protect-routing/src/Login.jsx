import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {

    const [form, setForm] = useState({ em: '', pass: '' })

    const navigate = useNavigate() ; 

    const handleSubmit = async(e) => {
        e.preventDefault();

        const {data} =  await axios.get(`http://localhost:3000/users`)

        const users = data ;

        const usr = users.find((u) => u.email == form.em)

        if (usr != null) {
          
            if (usr.password == form.pass) {
                localStorage.setItem("userRole", JSON.stringify(usr))
                
                // localStorage.setItem("userRole" , usr.role)
                navigate('/dashboard')
            } else {
                alert('Incorrect Password')
            }
        } else {
            alert("User Does Not Exists")
        }
    } 
    return (
        <div>
            <h2>Login User</h2>
            <form onSubmit={handleSubmit}>
                email : <input type="text" name='em' value={form.em} onChange={(e) => setForm({ ...form, em: e.target.value })} required /> <br /><br />
                password : <input type="text" name='pass' value={form.pass} onChange={(e) => setForm({ ...form, pass: e.target.value })} required /> <br /><br />
                <button type='submit'>Login</button>
            </form>
        </div>
    )
}

export default Login



// anagram code 