import React from 'react'

const ShowData = () => {
  
// const [userDetail, setUserDetail] = useState({userId: '', name: '', phone: '', email: '', city : '', rating:''})
  
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>UserId</th>
            <th>Name</th>
            <th>phone</th>
            <th>Email</th>
            <th>City</th>
            <th>Ride</th>
          </tr>
        </thead>
        <tbody>
          {
            userInfo.map ( (uinfo) => (
            <tr>
              <td>{uinfo.userId}</td>
              <td>{uinfo.name}</td>
              <td>{uinfo.phone}</td>
              <td>{uinfo.email}</td>
              <td>{uinfo.city}</td>
              <td>{uinfo.ride}</td>
            </tr>
          ))}
        </tbody>
      </table>
      
    </div>
  )
}

export default ShowData
