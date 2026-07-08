import React, { useEffect, useState } from 'react'
import api from "./service";
const FacultyData = () => {
 const [form, setForm] = useState( { prn: '', name : "", email : "", m1 : "", m2: "", m3: "", m4:"", total: "", percentag : ""})


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
    } , [form])

  

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
        setForm(res.data)
      })
      .catch( (err) => {
        console.log(err)
      })

      
    let total = Number(form.m1) + Number(form.m2) + Number(form.m3) + Number(form.m4) 

    let percentag = total / 4;
    
    const student = {...form, total, percentag}

    }
  return (
    <div>
        <center>

          <h3>Student Data</h3>
            <table border = '3'>
                <thead>
                    <tr>
                       <th>PRN</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>M1</th>
                        <th>M2</th>
                        <th>M3</th>
                        <th>M4</th>
                        <th>total</th>
                        <th>Percentag</th>
                        
                    </tr>
                </thead>
                <tbody>
                   {
                    alluser?.map( (receiveTo) => ( 
                            <tr key={receiveTo.id}>
                              <td>{receiveTo.prn}</td>
                                <td>{receiveTo.name}</td>
                                <td>{receiveTo.email}</td>
                                 <td>{receiveTo.m1}</td>
                                <td>{receiveTo.m2}</td>
                                <td>{receiveTo.m3}</td>
                                <td>{receiveTo.m4}</td>
                                <td>{receiveTo.total}</td>
                                <td>{receiveTo.percentag}</td>
                              
                                <td></td>
                            </tr>
                            ))
                   }
                    
                </tbody>
            </table>
        </center>
      
    </div>
  )
}

export default FacultyData
