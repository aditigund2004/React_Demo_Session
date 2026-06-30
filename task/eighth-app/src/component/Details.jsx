import React, { useState } from 'react'

const Details = ({collecte}) => {

  return (
    <div>
        <center>
            <h1>Details</h1>
            <table border='2' cellPadding='4' cellSpacing='5'>
                <thead>
                    <tr>
                        <td>Id</td>
                        <td>Name</td>
                        <td>Address</td>
                        <td>Age</td>
                    </tr>
                </thead>
                <tbody>
                    { 
                    collecte.map( (e) => (

                    <tr key ={e.id}>
                        <th>{e.id}</th>
                        <th>{e.name}</th>
                        <th>{e.address}</th>
                        <th>{e.age}</th>
                    </tr>
                    ))}
                </tbody>
            </table>
        </center>
      
    </div>
  )
}

export default Details
