// import React, { useEffect, useState } from 'react'
// import { addUser, getUsers } from '../data'

// const Login = ({check}) => {

//     const [user, setUser] = useState({id: '', name:  '', username : '', password: '', role: ''})

//     let [u, uSet] = useState([])

//     useEffect ( () => {
//         uSet(getUsers());
//     }, []);

//     // login
//     const handleSubmit = (e) =>{
//         e.preventDefault()
        
//         const foundUser = u.find(
//         (uu) =>
//             uu.username === user.username &&
//             uu.password === user.password
//     )

//     if (foundUser) {
//         alert(`${foundUser.role} login successfully`)
//         check(foundUser)   // send to parent
//     } else {
//         alert("Invalid username or password")
//     }

//     setUser({id: '', name:  '', username : '', password: '', role: ''})
        
//     }

//     const handleInput = (e) => {
//         const {name, value} = e.target
//         setUser ({...user, [name]: value})
//     }

//     function loadUser (){
//         uSet(addUser())
//     }

    
//   return (
//     <div>
       

//         <h2>All Users</h2>
//         <div>

//         <table border= '3'>
//             <thead>
//                 <tr>
//                     <th>Id</th>
//                     <th>Name</th>
//                     <th>Username</th>
//                     <th>Password</th>
//                     <th>Role</th>
//                 </tr>
//             </thead>
//             <tbody>
//                 {
//                     u?.map ( (u) =>  (
//                 <tr key = {u.id}>
//                     <td>{u.id}</td>
//                     <td>{u.name}</td>
//                     <td>{u.username}</td>
//                     <td>{u.password}</td>
//                     <td>{u.role}</td>
//                 </tr>
//                 ))}
//             </tbody>
//         </table>
//         </div>



//          <form onSubmit={handleSubmit}>
//             <h1>Login Page</h1>

//             Id : <input type='text' name='id'  value = {user.id} onChange={handleInput} required/><br></br><br></br>
//             Name : <input type='text' name='name'  value = {user.name} onChange={handleInput} required/><br></br><br></br>
//             Username : <input type='text' name='username'  value = {user.username} onChange={handleInput} required/><br></br><br></br>
//             Password : <input type='text' name='password'  value = {user.password} onChange={handleInput} required/><br></br><br></br>
//             Role : <input type='text' name='role'  value = {user.role} onChange={handleInput} required/><br></br><br></br>

//             <button type='submit'>Login</button>
//         </form>
      
        
      
//     </div>
//   )
// }

// export default Login


import React, { useEffect, useState } from 'react'
import { getUsers, addUserToList } from '../data'

// check prop send to parent 
const Login = ({ check, user: loggedUser }) => {

    const [user, setUser] = useState({ id: '', name: '', username: '', password: '', role: '' })
    
    const [allUsers, setAllUsers] = useState([])
    const [msg, setMsg] = useState('')


    useEffect(() => {
        setAllUsers(getUsers())
    }, [])

    // LOGIN
    const handleLogin = (e) => {
        e.preventDefault()

        // check user or admin if admin then add user if not then show user dashboard

        const foundUser = allUsers.find(
            (u) =>
                u.username === user.username &&
                u.password === user.password
        )

        if (foundUser) {
            setMsg(`${foundUser.role} login successfully`)
            check(foundUser)
        } else {
            setMsg("Invalid username or password")
        }

        setUser({ id: '', name: '', username: '', password: '', role: '' })
    }

    // add user only adinm
    const handleAddUser = (e) => {
        e.preventDefault()

        if (loggedUser?.role !== "admin") {
            setMsg("Only admin can add users")
            return
        }

        addUserToList(user)
        setAllUsers(getUsers())

        setMsg("User added successfully")

        setUser({ id: '', name: '', username: '', password: '', role: '' })
    }

    const handleInput = (e) => {
        const { name, value } = e.target
        setUser({ ...user, [name]: value })
    }

    return (
        <div>

            <h2>All Users</h2>

            <table border="3">
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
                    {allUsers.map((u) => (
                        <tr key={u.id}>
                            <td>{u.id}</td>
                            <td>{u.name}</td>
                            <td>{u.username}</td>
                            <td>{u.password}</td>
                            <td>{u.role}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* LOGIN FORM */}
            <form onSubmit={handleLogin}>
                <h3>Login</h3>

                Username: <input name="username" value={user.username} onChange={handleInput} /><br /><br />
                Password: <input name="password" value={user.password} onChange={handleInput} /><br /><br />

                <button type="submit">Login</button>
            </form>

            {/* add user by the admin  or only admin */}
            {loggedUser?.role === "admin" && (
                <form onSubmit={handleAddUser}>
                    <h3>Add User</h3>

                    Id: <input name="id" value={user.id} onChange={handleInput} /><br /><br />
                    Name: <input name="name" value={user.name} onChange={handleInput} /><br /><br />
                    Username: <input name="username" value={user.username} onChange={handleInput} /><br /><br />
                    Password: <input name="password" value={user.password} onChange={handleInput} /><br /><br />
                    Role: <input name="role" value={user.role} onChange={handleInput} /><br /><br />

                    <button type="submit">Add User</button>
                </form>
            )}
        </div>
    )
}

export default Login