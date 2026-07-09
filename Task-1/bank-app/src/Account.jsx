import React, { use, useEffect, useState } from 'react'
import { api } from './service'

const Account = () => {

    const [user, setUser] = useState([])

    const [form, setForm] = useState( {cname:""})

    const [data, setData] = useState(0)

    const loadData =()=>{
        api.get('account')
        .then((res)=>{
            console.log(res.data)
            setUser(res.data)
        })
        .catch( (err) =>{
            console.log(err)
        })

    }

    useEffect( () =>{
        loadData();
    }, [])

    const handleDelete =(id)=>{
        api.delete(`account/${id}`)
        .then( (res)=>{
            console.log(res.data)
            loadData()
        })
        .catch( (err) =>[
            console.log(err)
        ])
    }

    const handleInput =(e)=>{
        const {name, value} = e.target
        setForm({...form, [name]: value})
    }

    const handleSubmit = async(e)=>{
        e.preventDefault()
        if(data)
        { 
            await api.put(`account/${data}`, form)
            .then( (res)=>{
                loadData(res.data)
            })

        }
        else{

        api.post(`account`, form)
        .then( (res) => {
            loadData(res.data)
        })

        setForm( {cname:""})
    }
    }

    const handleUpdate =(data)=>{
        setForm({...data})
        setData(data.id)
    }
  return (
    <div>
        <center>
            <form onSubmit={handleSubmit}>
                Customer Name: <input type="text" name="cname" value={form.cname} onChange={handleInput} required /><br></br>
                <button>Add</button>
            </form>


            <table border= '3'>
                <thead>
                    <tr>
                        <th>Coustomer name</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <thead>
                    {
                        user.map( (u)=>(
                            <tr  key = {u.id}>
                                <td>{u.cname}</td>
                                <td>
                                    <button onClick={()=> handleDelete(u.id)}>Delete</button>
                                </td>
                                <td>
                                    <button onClick={() => handleUpdate (u)}>Update</button>
                                </td>
                            </tr>

                        ))
                    }
                </thead>
            </table>
        </center>

      
    </div>
  )
}

export default Account
