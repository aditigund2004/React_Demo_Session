// import React, { useState } from 'react'
// import { useNavigate } from 'react-router-dom'

// const Login = () => {

//     const [login, setLogin] = useState({email: "", password: ""})
    
//     const navigate = useNavigate()

//     const handleSubmit= (e)=>{
//         e.preventDefault()
        

//         if(login.email == 'ram' && login.password == '123')
//         {
            
//             localStorage.setItem('isLogin', 'yes')

//         }
//         else{
//             localStorage.setItem('isLogin', 'no')
//         }
//         navigate('/dashboard')
//     }


//     const handleInput = (e) =>{
//         const {name, value} = e.target 
//         setLogin({...login, [name]: value})
//     }

//   return (
//     <div>
//         <center>
//             <h2>Login page</h2>

//             <form onSubmit={handleSubmit}>
//                 email : <input type="text" name ='email'  value={login.email} onChange={handleInput} required /> <br /> <br />
//                 password : <input type="text" name ='password'  value={login.password} onChange={handleInput} required /> <br /> <br />

//                 <button>Login here</button>
//             </form>
//         </center>
      
//     </div>
//   )
// }

// export default Login
