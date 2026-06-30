import React, { useEffect, useState } from 'react'
import { addUser, addUserToList } from '../data'

const Login = ({checkuser, checkValid : logged}) => {
    
    const [user, setUser] = useState({ id: '', name: '', username: '', password: '', role: '' })

    const [alluser, setAllUser] = useState([])


    useEffect( () => {
        setAllUser(addUser());
    },[])

    const handleInput = (e) => {
        const {name, value} = e.target
        setUser ({...user, [name] : value})
    }

    const handleLogin =(e)=>{
        e.preventDefault()

        // function to check user or admin

        const findUser = alluser.find(
            (allur) =>
                allur.username === user.username &&
            allur.password === user.password
        )

        if(findUser){
            console.log( findUser.role,'login sccuess')
            checkuser(findUser)

        }else{
            console.log( 'invalid username and password')
        }

        setUser({ id: '', name: '', username: '', password: '', role: '' })
    }

    const handleUser =(e) =>{
        e.preventDefault()

        if(logged?.role !== 'admin'){
            console.log( 'only admin can add user')
            
        }

        addUserToList(user);
        setAllUser(addUser());

        console.log("User Added Successfully!!!!!!!")



        setUser({ id: '', name: '', username: '', password: '', role: '' })

    }
    
  return (
    <>
        <h1>All users</h1>
        <table border='3'>
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
                alluser?.map((e) => (
                <tr key ={e.id}>
                    <td>{e.id}</td>
                    <td>{e.name}</td>
                    <td>{e.username}</td>
                    <td>{e.password}</td>
                    <td>{e.role}</td>

                </tr>
))}
            </tbody>
        </table>
        <br></br><br></br>

        <form onSubmit={handleLogin}>
            Username : <input type='text' name='username'  value = {user.username} onChange={handleInput} required/><br></br><br></br>
            Password : <input type='text' name='password'  value = {user.password} onChange={handleInput} required/><br></br><br></br>

            <button type='submit'>Login</button>
            <br></br><br></br>
        </form>

        {
            logged?.role ==='admin' && (
                <form onSubmit={handleUser}>
                    <h2>Add User</h2>
                    Id : <input type='text' name='id'  value = {user.id} onChange={handleInput} required/><br></br><br></br>
                    Name : <input type='text' name='name'  value = {user.name} onChange={handleInput} required/><br></br><br></br>
                    Username : <input type='text' name='username'  value = {user.username} onChange={handleInput} required/><br></br><br></br>
                    Password : <input type='text' name='password'  value = {user.password} onChange={handleInput} required/><br></br><br></br>
                    Role : <input type='text' name='role'  value = {user.role} onChange={handleInput} required/><br></br><br></br>

                    <button type='submit'>Add User</button>
        </form>
            )}
      
    </>
  )
}

export default Login
