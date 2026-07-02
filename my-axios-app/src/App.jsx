import React, { useState } from 'react'
import ShowEmp from './components/ShowEmp'
import EmpDetail from './components/EmpDetail'

const App = () => {

  let [ref, setRef] = useState(0)

  return (
    <div>
      <center>
        <h1>Axios App</h1>
        <ShowEmp refTrigger={ref} setRef={setRef}/>
        <EmpDetail setRef={setRef} refTrigger={ref}/>
      </center>
      
    </div>
  )
}

export default App


/* 
npm install -g json-server

npx json-server db.json ->

    Index:
    http://localhost:3000/

    Static files:
    Serving ./public directory if it exists

    Endpoints:
    http://localhost:3000/employees



**** - JSON Server automatically generates the id if you don't provide one.


REST API -> or URL
  http://localhost:3000/employees

  http -> set of rule (protocol) -> how clicen communicate with server
  http:// → HyperText Transfer Protocol
  https:// → Secure HTTP (encrypted)

  localhost -> local machine or your own computer (It is equivalent to the IP address:127.0.0.1)
  http://localhost:3000
  http://127.0.0.1:3000


  3000 -> port number
  A port identifies which application on the computer should receive the request

 Port | Common Use                                                     
 ---- | -------------------------------------------------------------- 
 80   | HTTP                                                           
 443  | HTTPS                                                          
 3000 | JSON Server, React, Node.js (commonly used during development) 
 5000 | Flask                                                          
 8080 | Tomcat, other web servers   


  employee -> Resource (Endpoint)
  This is the specific resource you want to access.
  if you have db.json
    {
    "employees": [],
    "products": [],
    "students": []
  }
    Then JSON Server automatically creates these endpoints:
    http://localhost:3000/employees
    http://localhost:3000/products
    http://localhost:3000/students
  */  