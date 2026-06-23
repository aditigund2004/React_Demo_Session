import React, { use, useState } from "react";

const EmployeeForm = () => {
  const [emp, setEmp] = useState({ name: "", role: "", salary: "" });

  // form handling
  /* e.preventDefault() in JavaScript is used to stop the browser's default behavior for an event.
    Prevent a Link from Navigating
    Prevent a Form from Submitting
    e is the event object passed to the event handler.
The method name is preventDefault() (capital D).
It only prevents the browser's default action; it does not stop event propagation. To stop propagation,
     */

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("handle invoked");
    console.log(emp);
  };
  const handleName = (e) => {
    setEmp({ ...emp, name: e.target.value }); //spread operator
  };
  const handlerole = (e) => {
    setEmp({ ...emp, role: e.target.value });
  };
  const handleSalary = (e) => {
    setEmp({ ...emp, salary: e.target.value });
  };

  return (
    <div>
      <center>
        <form onSubmit={handleSubmit}>
          <h1> Employee Form</h1>
          Enter Name:{" "}
          <input
            type="text"
            name="ename"
            onChange={handleName}
            required
          ></input>
          <br></br>
          <br></br>
          Enter role:{" "}
          <input type="text" name="role" onChange={handlerole} required></input>
          <br></br>
          <br></br>
          Enter Salary:{" "}
          <input
            type="text"
            name="salary"
            onChange={handleSalary}
            required
          ></input>
          <br></br>
          <br></br>
          <button type="submit">Add Employee</button>
        </form>
      </center>
    </div>
  );
};

export default EmployeeForm;
