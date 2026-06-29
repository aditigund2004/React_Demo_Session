import React, { useState } from 'react'

const Login = () => {

    const [user, setUser] = useState({id: '', name:  '', username : '', password: '', role: ''})

    const [u, uSet] = useState(null)

    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log(user)
        setUser({id: '', name:  '', username : '', password: '', role: ''})
        
    }

    const handleInput = (e) => {
        const {name, value} = e.target
        setUser ({...user, [name]: value})
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <h1>Login Page</h1>

            Id : <input type='text' name='id'  value = {user.id} onChange={handleInput} required/><br></br><br></br>
            Name : <input type='text' name='name'  value = {user.name} onChange={handleInput} required/><br></br><br></br>
            Username : <input type='text' name='username'  value = {user.username} onChange={handleInput} required/><br></br><br></br>
            Password : <input type='text' name='password'  value = {user.password} onChange={handleInput} required/><br></br><br></br>
            Role : <input type='text' name='role'  value = {user.role} onChange={handleInput} required/><br></br><br></br>

            <button type='submit'>Add User</button>
        </form>

        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Username</th>
                    <th>Password</th>
                    <th>Role</th>
                </tr>
            </thead>
            <tbody>
                {
                    u.map ( (u) =>  (
                <tr key = {u.id}>
                    <td>{u.id}</td>
                    <td>{u.name}</td>
                    <td>{u.username}</td>
                    <td>{u.password}</td>
                    <td>{u.role}</td>
                </tr>
                ))}
            </tbody>
        </table>
        
      
    </div>
  )
}

export default Login