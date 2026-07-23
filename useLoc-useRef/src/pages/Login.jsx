import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { api } from '../services';

const Login = () => {

    const [form, setForm] = useState({ em: '', pass: '' })

    const navigate = useNavigate();

    const handleSubmit = async(e)=>{
        e.preventDefault()

        const {data} = await api.get(`user`)

        const users = data

        const usr = users.find( (u) => u.email === form.email)

        if(usr != null){
            if(usr.password === form.pass){
                localStorage.setItem("userRole", JSON.stringify(usr))

                navigate('/dashboard')
            }
            else{
                alert('incorrect password')
            }
        }
        else{
            alert('user does not exist')
        }
    }
  return (
    <div>
        <center>
            <h2>Login here</h2>

             <form onSubmit={handleSubmit}>
                email : <input type="text" name='em' value={form.em} onChange={(e) => setForm({ ...form, em: e.target.value })} required /> <br /><br />
                password : <input type="text" name='pass' value={form.pass} onChange={(e) => setForm({ ...form, pass: e.target.value })} required /> <br /><br />
                <button type='submit'>Login</button>
            </form>

        </center>
      
    </div>
  )
}
export default Login