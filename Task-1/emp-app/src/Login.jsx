import React, { useState } from 'react'
import ShowData from './ShowData'
import { api } from './service'
import Data from './Data'

const Login = () => {
    const [login , setLogin] = useState( { email: "",  password: ""})

    const [show, setShow] = useState(false)
    const [role, setRole] = useState("")
    const [invalid, setInvalid] = useState(false);

    const handleSubmit = async(e)=>{
        e.preventDefault()
        
        try{
      
        const res = await api.get(`users`);
        // const all = res.data

        let found = false;

        res.data.map((u)=>{
          if(u.email === login.email && u.password === login.password){
            setRole(u.role)
            // console.log(u.role)
            found = true;
          }
          })

          if(found) {
            setShow(true)
            setInvalid(false)
          }else{
             setShow(false)
             setRole(" ")
            setInvalid(true)
          }
           setLogin({email: "", password: ""})
        
      }
      catch(err){
        console.log(err)
      }
    };
     if (show && role === "admin") {
    return <Data />;
  }

  if (show && role === "user") {
    return <ShowData />;
  }
    
      const handleInput = (e)=>{
        const{name, value} = e.target 
        setLogin({...login, [name]: value})
    
    
      }
    

  return (
    <div>
        <center>
            <h2>Login Page</h2>
         <form onSubmit={handleSubmit}>
          Email : <input type="text" name = 'email' value = {login.email} onChange={handleInput} required /><br></br> <br></br>
          password : <input type="text" name = 'password' value = {login.password} onChange={handleInput} required /><br></br> <br></br>

          <button>login</button>
          {/* { show && role =='admin' && <Data/> }

          { show && role === 'user' && <ShowData/> } */}

          {/* {show === false && <p> Invalid email or password</p>} */}

          { invalid && <p> Invalid email or password</p>}
        </form>

        </center>
      
    </div>
  );
};
export default Login