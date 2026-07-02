import React, { useEffect, useState } from 'react'
import { addAPI } from '../data';

const Booking = ({reload }) => {

    const initialState = {userId: '', name: '', pickup: '', drop: '', cabType : '', 
      paymentMode:'', fare: '', date: ''}

    const [userDetail, setUserDetail] = useState(initialState);

    const handleSubmit =(e) =>{
      e.preventDefault()
    
      addAPI(userDetail)

      reload();
      
      setUserDetail(initialState);

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
        pickup: <input type='text' name = 'pickup' value={userDetail.pickup} onChange={handelInput} required/><br></br><br></br>
        drop: <input type='text' name = 'drop' value={userDetail.drop} onChange={handelInput} required/><br></br><br></br>
        cabType: <input type='text' name = 'cabType' value={userDetail.cabType} onChange={handelInput} required/><br></br><br></br>
        paymentMode: <input type='text' name = 'paymentMode' value={userDetail.paymentMode} onChange={handelInput} required/><br></br><br></br>
        fare: <input type='text' name = 'fare' value={userDetail.fare} onChange={handelInput} required/><br></br><br></br>
        date: <input type='text' name = 'date' value={userDetail.date} onChange={handelInput} required/><br></br><br></br>

        <button type='submit'>Add User and Book Ride</button>
      </form>
    </div>
  )
}

export default Booking
