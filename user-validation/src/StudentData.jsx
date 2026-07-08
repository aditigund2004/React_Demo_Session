import React, { useEffect, useState } from 'react'
import api from "./service";

const StudentData = () => {

  const [form, setForm] = useState( { name: "", email: "", password: "", role : ""})


  const [alluser, setAllUser] = useState([ ])

    const loadAllUser = ()=>{
        api.get('/student')
        .then( (res)=>{
            console.log(res.data)
            setAllUser(res.data)
        })
        .catch( (err) =>{
            console.log(err)
        })
    }

    useEffect( () =>{
        loadAllUser();
    } , [])

    const handleDelete =(id)=>{
      api.delete(`/student/${id}`)
      .then( (res)=> res.data)
      loadAllUser()
    }

    const handleInput =(e)=>{
      const {name, value} =e.target 
      setForm({...form, [name]: value})

    }

   
    const handleSubmit =(e)=>{
      e.preventDefault()
      console.log(form)

      api.post('/student', form)
      .then( (res)=>{
        console.log(res.data)
        loadAllUser();
      })
      .catch( (err) => {
        console.log(err)
      })

      // setForm({ prn:'', name:'', email:'', m1:'', m2:'', m3:'', m4:'', total:'', percentag:'' });



    }
  return (
    <div>
        <center>

          <h3>Add Student Details</h3>

          <form onSubmit={handleSubmit}>
          Name :<input type="text" name="prn" value={form.prn} onChange={handleInput} required  />  <br></br>  <br></br>
          Email :<input type="text" name="name" value={form.name} onChange={handleInput} required  />  <br></br>  <br></br>
          Password:<input type="text" name="email" value={form.email} onChange={handleInput} required  />  <br></br>  <br></br>
          Role :<input type="text" name="m2" value={form.m2} onChange={handleInput} required  />  <br></br>  <br></br>
         
          <button type='submit'>Add Student </button>

          </form>
          <h3>Student Data</h3>
            <table border = '3'>
                <thead>
                    <tr>
                       <th>Name</th>
                        <th>Emial</th>
                        <th>Password</th>
                        <th>Role</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                   {
                    alluser?.map( (receiveTo) => ( 
                            <tr key={receiveTo.id}>
                              <td>{receiveTo.name}</td>
                                <td>{receiveTo.email}</td>
                                <td>{receiveTo.password}</td>
                                 <td>{receiveTo.role}</td>
                               
                                <td>
                                  <button onClick={ () => handleDelete(receiveTo.id)}>Delete</button>
                                </td>
                                <td>
                                  <button >Update</button>
                                </td>
                            </tr>
                            ))
                   }
                    
                </tbody>
            </table>
        </center>
      
    </div>
  )
}

export default StudentData
