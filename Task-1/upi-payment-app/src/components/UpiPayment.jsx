import React, { useState } from 'react'
import { addAPI } from '../data'

const UpiPayment = ({sendData}) => {
    const [upidata, setUpiData]  = useState({'id':'',  'uname': '', 'tid':'', 'paymentdate':'', 'money': ''})

    const handelSubmit =(e)=>{
        e.preventDefault()
        console.log(upidata)

        // send data to form
        sendData(upidata)

        // add data in from method in data
        addAPI(upidata)

        // sendData(1)

    }

    const handelInput = (e)=>{
        const{name, value} = e.target
        setUpiData ({...upidata, [name]: value})

    }
  return (
    <div>
        <form onSubmit={handelSubmit}>

        UserId: <input type='text' name = 'id' value={upidata.id} onChange={handelInput} required/><br></br><br></br>
        Name: <input type='text' name = 'uname' value={upidata.uname} onChange={handelInput} required/><br></br><br></br>
        Transaction Id: <input type='text' name = 'tid' value={upidata.tid} onChange={handelInput} required/><br></br><br></br>
        Payment Date: <input type='text' name = 'paymentdate' value={upidata.paymentdate} onChange={handelInput} required/><br></br><br></br>
        Money: <input type='text' name = 'money' value={upidata.money} onChange={handelInput} required/><br></br><br></br>

        <button type='submit'>Add Payment</button>
        </form>

      
    </div>
  )
}

export default UpiPayment
