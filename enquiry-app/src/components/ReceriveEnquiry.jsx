import React, { useState } from 'react'

const ReceriveEnquiry = ({enquiryList, DeleteId}) => {

    // DeleteId is function where is send data from child to parent component
    const handleDelete = (id) => {
        console.log(id)
        DeleteId(id)
    }

  return (
    <div>
        <center>
            <table border = '2' cellPadding={5} cellSpacing={4} >
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Qualification</th>
                        <th>College</th>
                        <th>Email</th>
                        <th>Mobile</th>
                        <th>Address</th>
                        <th>Actions</th>
                        {/* <th>Update</th> */}
                        
                        
                    </tr>
                </thead>
                <tbody>
                    {
                    enquiryList.map( (e) => (
                    <tr key = {e.id}>
                        <td>{e.id}</td>
                        <td>{e.sname}</td>
                        <td>{e.qual}</td>
                        <td>{e.col}</td>
                        <td>{e.email}</td>
                        <td>{e.mob}</td>
                        <td>{e.add}</td>
                        <th>
                            <button onClick={()=> handleDelete(e.id)}> Delete</button>

                        </th>
                        {/* <th>
                            <button onClick={()=> handleUpdate(e.id)}> update</button>

                        </th> */}
                    </tr>
                    ))
                    }
                </tbody>
                
            </table><br></br><br></br>

        </center>
      
    </div>
  )
}

export default ReceriveEnquiry
