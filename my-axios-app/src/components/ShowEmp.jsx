import React, { useEffect, useState } from 'react'
import axios from 'axios'

const ShowEmp = ({refTrigger, setRef }) => {

    let [emp, setEmp] = useState([])

    

    // fetch is method in js used to fetch api 
    // promise return somthing
    // fetch() is used in JavaScript to connect your frontend to a backend API and get or send data.
    // a tool to talk to a server (API)

    // fetch -> same for POST, GET, PATCH, PUT, DELETE

    // const loadEmp =()=>{
    // fetch('http://localhost:3000/employees')
    // .then( (res) => {
    //     // console.log("responce", res)
    //     // console.log(res.json())

    //     res.json()

    //     .then((dt) =>{
    //         console.log("data : " ,dt)
    //         setEmp(dt)
    //     })
    //     .catch((err) => {
    //         console.log("err : " ,err)
    //     })
    // })
    // .catch( (err) =>{
    //     console.log("error", err)
    // })
    // }


    // axios -> auto covert data into json 

    const loadEmp =()=> {
        axios.get('http://localhost:3000/employees')
        .then( (res) =>{
            setEmp(res.data)
        })
        .catch( (err) =>{
            console.log("error : ", err)
        })

    }

    useEffect ( loadEmp, [refTrigger])

    const handleDelete = (id)=>{
        axios.delete('http://localhost:3000/employees/' + id)
        .then( ()=> {
            setRef(prev => prev + 1)
        })
    }

    

  return (
    <div>
        <h2>Employee Data</h2>
        <table border = '2' cellPadding='4' cellSpacing='4'>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Role</th>
                    <th>Salary</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    emp.map( (e) => (
                        <tr key={e.id}>
                            <td>{e.empid}</td>
                            <td>{e.name}</td>
                            <td>{e.role}</td>
                            <td>{e.salary}</td>
                            <td>
                                <button type='click' onClick={() => handleDelete(e.id)}>Delete</button>
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    </div>
  )
}

export default ShowEmp
