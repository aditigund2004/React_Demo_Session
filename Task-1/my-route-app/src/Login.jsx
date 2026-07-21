import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "./apiService";

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const navigateMe = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // console.log(form)

    // if (form.email == 'tejas' && form.password == 'tka') {
    //     localStorage.setItem("isLogin", "yes")
    // } else {
    //     localStorage.setItem("isLogin", "no")

    // }

    const { data } = await api.get('/');
    console.log(data)

    const alluser = data;
    console.log(alluser)

    const finduser = alluser.find((u) => u.email == form.email)
      if (finduser != null) {
        if(finduser.password == form.password){
            localStorage.getItem('userRole', finduser.role)
            navigateMe('/dashboard')
        }else{
            alert('incorrect password')
        } 
      }
      else{
        alert('invalid user or user not exist')
      }
    
  };
  return (
    <div>
      <h2>Login</h2>

      <form onSubmit={handleSubmit}>
        email :{" "}
        <input
          type="text"
          name="email"
          value={form.email}
          onChange={handleChange}
        />{" "}
        <br />
        <br />
        password :{" "}
        <input
          type="text"
          name="password"
          value={form.password}
          onChange={handleChange}
        />{" "}
        <br />
        <br />
        <button>Login</button>
      </form>
    </div>
  );
};

export default Login;
