import React, { useEffect, useState } from "react";
import { api } from "../service";

const AddEmp = ({ refdata, setRef, updateRec }) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    role: "",
    password: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();

    if (updateRec) {
      api.put(`users/${updateRec.id}`, form).then((res) => {
        setForm({ name: "", email: "", role: "", password: "" });
        setRef(refdata + 1);
      });
    } else {
      api.post(`users`, form).then((res) => {
        setForm({ name: "", email: "", role: "", password: "" });

        setRef(refdata + 1);
      });
    }
  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  useEffect(() => {
    if (updateRec) {
      setForm(updateRec);
    }
  }, [updateRec]);
  return (
    <div>
      <center>
        <form onSubmit={onSubmit}>
          name:{" "}
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleInput}
            required
          />
          <br></br>
          <br></br>
          email:{" "}
          <input
            type="text"
            name="email"
            value={form.email}
            onChange={handleInput}
            required
          />
          <br></br>
          <br></br>
          role:{" "}
          <input
            type="text"
            name="role"
            value={form.role}
            onChange={handleInput}
            required
          />
          <br></br>
          <br></br>
          password:{" "}
          <input
            type="text"
            name="password"
            value={form.password}
            onChange={handleInput}
            required
          />
          <br></br>
          <br></br>
          <button type="submit"> Add</button>
        </form>
      </center>
    </div>
  );
};

export default AddEmp;
