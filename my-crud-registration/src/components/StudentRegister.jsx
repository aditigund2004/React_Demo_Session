import axios from 'axios'
import React, { useEffect, useState } from 'react'

const StudentRegister = ({Recive, reload}) => {

    let [form, setForm] = useState({ "eid": "" ,"name" : "" , "age" : "" , "mobile" : "" , "location" : "" , "highestQualification" : "" , "PassoutYear" : "" , "college" : ""})
    
    const handleSubmit = (e)=>{
        e.preventDefault()

       if(form.id){
         axios.put(`http://localhost:3000/Students/${form.id}`, form)
        .then( (res) =>{
            reload()
            // setForm(res.data)
            setForm({"eid": "", "uname" : ""})
        })
        .catch((err) =>{
            console.log(err)
        })

       }else{
         axios.post('http://localhost:3000/Students', form)
        .then( (res) =>{
            reload()
            // setForm(res.data)
            setForm({"eid": "", "uname" : ""})
        })
        .catch((err) =>{
            console.log(err)
        })

       }
    }

    useEffect(()=>{
        if(Recive) {
            setForm(Recive)
        }
    } ,[Recive])

    const handelInput = (e)=>{
        const {name, value} =e.target 
        setForm({...form, [name]: value})

    }
  return (
    <div>
        <center>
            <h2>Student Register From</h2>
            <form onSubmit={handleSubmit}>
                Id: <input type="text" name ='eid' value = {form.eid} onChange={handelInput} required/><br></br><br></br>
                Name: <input type="text" name ='uname' value = {form.uname} onChange={handelInput} required/><br></br><br></br>
                Age: <input type="text" name ='age' value = {form.age} onChange={handelInput} required/><br></br><br></br>
                Mobile: <input type="text" name ='mobile' value = {form.mobile} onChange={handelInput} required/><br></br><br></br>
                Location: <input type="text" name ='location' value = {form.location} onChange={handelInput} required/><br></br><br></br>
                Highest Qualification: <input type="text" name ='highestQualification' value = {form.highestQualification} onChange={handelInput} required/><br></br><br></br>
                Passout Year: <input type="text" name ='PassoutYear' value = {form.PassoutYear} onChange={handelInput} required/><br></br><br></br>
                college: <input type="text" name ='college' value = {form.college} onChange={handelInput} required/><br></br><br></br>

                <button type='submit'>Add</button>
            </form>
        </center>
      
    </div>
  )
}

export default StudentRegister
