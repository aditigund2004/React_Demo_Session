import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ whologin }) => {
  const [login, setLogin] = useState({ email: "", password: "" });

  const negivate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (whologin === "banker") {
      const all = await axios.get(`http://localhost:3000/bankers`);
      const banker = all.data.find((b) => b.email === login.email);

      if (banker) {
        if (banker.password === login.password) {
          negivate("/bankdashboard");
        } else {
          alert("incorrect password");
        }
      } else {
        alert("banker does not exist");
      }
    } else {
      const all = await axios.get(`http://localhost:3000/customers`);
      const customers = all.data.find((c) => c.email === login.email);

      if (customers) {
        if (customers.password === login.password) {
          negivate("/custdashboard");
        } else {
          alert("incorrect password");
        }
      } else {
        alert("user does not axist");
      }
    }
  };
  return (
    <div>
      <center>
        <h3>Login Form</h3>
        <form onSubmit={handleSubmit}>
          email :{" "}
          <input
            type="text"
            name="email"
            value={login.email}
            onChange={(e) =>
              setLogin({ ...login, [e.target.name]: e.target.value })
            }
            required
          />{" "}
          <br />
          <br />
          password :{" "}
          <input
            type="text"
            name="password"
            value={login.password}
            onChange={(e) =>
              setLogin({ ...login, [e.target.name]: e.target.value })
            }
            required
          />{" "}
          <br />
          <br />
          <button>Login here</button>
        </form>
      </center>
    </div>
  );
};

export default Login;
