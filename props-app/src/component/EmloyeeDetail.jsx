import React from 'react'

const EmloyeeDetail = ({ep}) => {
  return (
    <div>
        <center>
            <h2>Employee Info</h2>
            <table border = '2'>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Id</th>
                  <th>Salary</th>
                </tr>
              </thead>
              <tbody>
                {/* child prope */}
                {/* map() is used when you want to loop through an array and create 
                a new array of elements. */}
                {ep.map((e) => (
                <tr key={e.empid}>
                  
                  <td>{e.empname}</td>
                  <td>{e.empid}</td>
                  <td>{e.empsalary}</td>
                </tr>
                ))}
              </tbody>

            </table>
        </center>
      
    </div>
  )
}

export default EmloyeeDetail
