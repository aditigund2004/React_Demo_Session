import React, { useState } from "react";

const LoginForm = () => {
    const [info, setInfo] = useState({uname: '', uemail: '', upass: ''})

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(info) 
    }

    const handleLogin = (e) => {
        // const {name, value}: e.target

    }
  return (
    <div>
      <center>
        <h2>Login Form</h2>
        <form onSubmit={handleSubmit}>
          Enter name : <input type="text" name = 'uname' onChange={handleLogin} required />
          <br></br>
          <br></br>
          Enter Email: <input type="text" name = 'uemail' onChange={handleLogin} required />
          <br></br>
          <br></br>
          Enter Password : <input type="password" name = 'upass' onChange={handleLogin} required />
          <br></br>
          <br></br>
          <button type="button">Login</button>
        </form>
      </center>
    </div>
  );
};

export default LoginForm;
