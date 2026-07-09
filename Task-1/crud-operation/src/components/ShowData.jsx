import React, { useEffect, useState } from 'react'
import { api } from '../service'

const ShowData = () => {
    const [alluser, setAlluser] = useState([])

    const [form, setForm] = useState({name: "", email :"", role :""})

    const [ref, setRef]=useState(0)

    const [edit, setEdit] = useState(0)

    const loadAllUser = async ()=>{
        // method 1
        api.get(`users`)
        .then( (res) =>{
            console.log(res.data)
            setAlluser(res.data)
        })
        .catch( (err)=>{
            console.log(err)
        });


        // method 2
        // const alluser = await api.get(`users`)
        //     setAlluser()

        // method 3
        // const { data } = await api.get(`users`)
        // setAlluser(data)
    };

    useEffect( ()=>{
        loadAllUser();
    },[ref])

    const handleInput =(e)=>{
        const {name, value} = e.target 
        setForm({...form, [name]:value})
    }

    const handleSubmit = async(e)=>{
        e.preventDefault()

        if(edit){
            await api.put(`users/${edit}`, form)
            // setEdit(null)
            setRef(ref + 1)

        }else{

        api.post(`users`, form)
        setRef(ref+1)
        }

        setForm({name: "", email :"", role :""})
    }


    const handleDelete = async (id)=>{
        await api.delete(`users/${id}`)
        loadAllUser()
    }

    const handleUpdate = (data)=>{
        // setForm( {
        //     name: user.name,
        //     email : user.email,
        //     role: user.role
        // });

        setForm({ ...data });
        setEdit(data.id)
    }
    
  return (
    <div>
        <center>
            <form onSubmit={handleSubmit}> 
                <h2>Add Data</h2>
                Name : <input type="text" name='name' value={form.name} onChange={handleInput} required/><br></br><br></br>
                Email : <input type="text" name='email' value={form.email} onChange={handleInput} required/><br></br><br></br>
                role : <input type="text" name='role' value={form.role} onChange={handleInput} required/><br></br><br></br>

                <button type='submit'>Add</button>
            </form>


            <table border='3'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                {
                    alluser.map( (u)=>(
                        <tr key={u.id}>
                            <td>{u.name}</td>
                            <td>{u.email}</td>
                            <td>{u.role}</td>
                            <td>
                                <button onClick={()=> handleDelete(u.id)}>Delete</button>
                            </td>
                            <td>
                                <button onClick={ ()=> handleUpdate(u)}>Update</button>
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

export default ShowData
