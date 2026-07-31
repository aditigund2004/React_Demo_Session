import React from 'react'
import { useLocation } from 'react-router-dom';

const CustomerDashbaord = () => {

  //   const { state } = useLocation();

  // const customers = state?.customer;

  // if (!customers) {
    
  //   return <h2>No customer data found.</h2>;
  // }

  return (
    <div>
        {/* <h2>Customer Dashboard</h2>

      <table border="1" cellPadding="10">
        <tbody>
          <tr>
            <td><b>Name</b></td>
            <td>{customers.name}</td>
          </tr>

          <tr>
            <td><b>Email</b></td>
            <td>{customers.email}</td>
          </tr>

          <tr>
            <td><b>Balance</b></td>
            <td>{customers.balance}</td>
          </tr>

          <tr>
            <td><b>Code</b></td>
            <td>{customers.code}</td>
          </tr>
        </tbody>
      </table> */}

      <table>
        <thead>
          <tr>
            <th>acc</th>
            <th>name</th>
            <th>email</th>
            <th>balance</th>
          </tr>
        </thead>
        <tbody>
          {
            from.map( (u)=> ( 
            <tr>
              <td>{u.acc}</td>
              <td>{u.name}</td>
              <td>{u.email}</td>
              <td>{u.balance}</td>
            </tr>
          ))}
        </tbody>
      </table>

      
    </div>
  )
}
export default CustomerDashbaord