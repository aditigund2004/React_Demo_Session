import axios from 'axios'
import React, { useEffect, useState } from 'react'

const StudentData = ({EditTo, refresh}) => {
    const [data, setData] = useState([])
    const [searchId, setSearchId] = useState("");

    const loadData= ()=>{
        axios.get('http://localhost:3000/Students')
        .then( (res)=>{
            setData(res.data)
            
        })
        .catch( (err) =>{
            console.log(err)
        })
    }

    const handleDelete =(id)=>{
        axios.delete(`http://localhost:3000/Students/${id}`)
        .then( (res) =>{
            // setData(data)
            loadData()
        })
        .catch( (err) =>{
            console.log(err)
        })
    }

    useEffect(loadData, [refresh])


    const handleSearch = () => {
    axios.get("http://localhost:3000/Students")
        .then((res) => {
            if (searchId === "") {
                setData(res.data);
            } else {
                const filtered = res.data.filter(student => student.eid === searchId);
                setData(filtered);
            }
        })
        .catch(console.log);
};

    // const handelUpdate = (st) =>{
    //     setData(EditTo)
    // }

  return (
    <div>
        <center>
             <h2>Student Data</h2>

                Search Id : <input type="text" value={searchId} onChange={(e) => setSearchId(e.target.value)}/><br></br><br></br>

                <button onClick={handleSearch}>Search</button><br></br><br></br>

                <button onClick={loadData}>Show All</button> <br /><br />


            <h2>Student Data</h2>
            <table border='2' cellPadding='4'>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Mobile</th>
                        <th>Location</th>
                        <th>Highest Qualification</th>
                        <th>Passout Year</th>
                        <th>College</th>
                        <th>ACTIONS</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map( (d) => (  
                        <tr key={d.id}>
                            <td>{d.eid}</td>
                            <td>{d.uname}</td>
                            <td>{d.age}</td>
                            <td>{d.mobile}</td>
                            <td>{d.location}</td>
                            <td>{d.highestQualification}</td>
                            <td>{d.PassoutYear}</td>
                            <td>{d.college}</td>
                            <td>
                                <button onClick={()=> handleDelete(d.id)}>Delete</button>
                            </td>
                            <td>
                                <button onClick={()=> EditTo(d)}>Update</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </center>
      
    </div>
  )
}

export default StudentData
