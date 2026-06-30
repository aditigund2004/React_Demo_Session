import React, { useState } from 'react'

const Booking = () => {


    const [userDetail, setUserDetail] = useState({userId: '', name: '', phone: '', email: '', city : '', rating:''})

    const handleSubmit =(e) =>{
      e.preventDefault()
      console.log(userDetail)

    }


    const handelInput =(e) => {
      const {name, value} = e.target
      setUserDetail({...userDetail, [name]: value})

    }

  return (
    <div>
      <form onSubmit= {handleSubmit}>
        UserId: <input type='text' name = 'userId' value={userDetail.userId} onChange={handelInput} required/><br></br><br></br>
        Name: <input type='text' name = 'name' value={userDetail.name} onChange={handelInput} required/><br></br><br></br>
        Phone No: <input type='text' name = 'phone' value={userDetail.phone} onChange={handelInput} required/><br></br><br></br>
        Email: <input type='text' name = 'email' value={userDetail.email} onChange={handelInput} required/><br></br><br></br>
        City: <input type='text' name = 'city' value={userDetail.city} onChange={handelInput} required/><br></br><br></br>
        Rating: <input type='text' name = 'rating' value={userDetail.rating} onChange={handelInput} required/><br></br><br></br>

        <button type='submit'>Add User and Book Ride</button>
      </form>
    </div>
  )
}

export default Booking
