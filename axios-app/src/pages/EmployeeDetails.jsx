import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { deleteAllEmployee, fetchAllEmployee } from '../serives'

function EmployeeDetails({reload, sendEmp}) {

    const [emp, setEmp] = useState([])

    const loadEmp = () => {
        // axios.get('http://localhost:3000/employees')
        // .then((res) =>{
        //     // console.log("res", res.data)
        //     setEmp(res.data)
        // })
        // .catch( (err) => {
        //     console.log("error", err)
        // })

        fetchAllEmployee().then((res)=>{
            setEmp(res.data)

        }).catch( (err)=>{
            console.log("error", err)
        })
    }

    useEffect( ()=>{
        loadEmp()

    }, [reload])

    const handleDelete = async(id)=>{
        // axios.delete('http://localhost:3000/employees/'+  id)
        // .then( (res) =>{

        //     // sendref(d+1)
        //     // React passes the previous state automatically:
        //     sendref(prev => prev + 1);
        
        // })
        // .catch( (err) =>{
        //     console.log("error", err)
        // })
        let res = await deleteAllEmployee(id);
        console.log(res)
        loadEmp()


    }
  return (
    <div>
        <center>
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
                                <button type='button' onClick={() => handleDelete(e.id)}>Delete</button>
                            </td>
                            <td> <button type = 'button' onClick={() => sendEmp(e)}>Update</button></td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
        </center>
      
    </div>
  )
}

export default EmployeeDetails
