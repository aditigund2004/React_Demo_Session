import React, { useState } from "react";
import ShowData from "./ShowData";
import { api } from "./service";

const App = () => {
  let [form, setForm] = useState({ email: "", password: "" });

  let [show, setShow] = useState(null);

  let [role, setRole] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    let all = await api.get("/users").then((res) => res.data)

    all.map((u) => {
      if (u.email === form.email && u.password === form.password) {
        setRole(u.role);
        console.log(role)
        setShow(true);

      }
    })

    setForm({ email: "", password: "" })
  }

  const handleInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <center>
      <h2>Login Page</h2>
      <form onSubmit={handleSubmit}>
        
        Email :{" "}
        <input type="text" name="email" value={form.email} onChange={handleInput} required  />  <br></br>  <br></br>
        
        Password :{" "}

        <input type="text" name="password" value={form.password} onChange={handleInput} required /> <br></br> <br></br>

        <button type="submit">Login</button>


        <h2>{show 
        
        && role === "admin" ? <ShowData/>  : 

        role === 'user' ? "Welcome User" : ''}</h2>

      </form>

      </center>
    </div>
  );
};

export default App;
