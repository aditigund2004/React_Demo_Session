import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { addEmployee, updateEmployee } from './services'

const ShowEmp = ({add, receiveUpdate}) => {
    const [data, setData] = useState({name: "", role: "", salary:""})
    
    useEffect ( () =>{
        if(receiveUpdate){
            setData(receiveUpdate)
        }
    }, [receiveUpdate])

    // const handleSubmit = async(e)=>{
    //     e.preventDefault()

    //     if(receiveUpdate){
    //         const res = await updateEmployee(receiveUpdate.id, data);
    //     }else{
    //     const res = await addEmployee(data);        
    //     }
    //     add(1)
    //     setData({name: "", role: "", salary:""});
    // }
    const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("Sending:", data);

    try {
        const res = receiveUpdate
            ? await updateEmployee(receiveUpdate.id, data)
            : await addEmployee(data);

        console.log("Success:", res.data);

        add(1);
        setData({ name: "", role: "", salary: "" });

    } catch (err) {
        console.log("Status:", err.response?.status);
        console.log("Response:", err.response?.data);
    }
};

    const handleInput =(e)=>{
        const{name, value} = e.target 
        setData({...data, [name]: value})
    }

  return (
    <div>
        <center>
            
            <h2>{receiveUpdate ? "Update Employee Data" : "Add Employee Data"}</h2>

            <form onSubmit={handleSubmit}>
                {/* id : <input type="text" name="id" value={data.id} onChange={handleInput} required/> <br></br> <br></br>  */}
                name : <input type="text" name="name" value={data.name} onChange={handleInput} required/> <br></br> <br></br>
                role : <input type="text" name="role" value={data.role} onChange={handleInput} required/> <br></br> <br></br>
                salary : <input type="text" name="salary" value={data.salary} onChange={handleInput} required/> <br></br> <br></br>

                <button>{receiveUpdate ? "Update Employee " : "Add Employee"}</button>

            </form>
        </center>
      
    </div>
  )
}

export default ShowEmp
