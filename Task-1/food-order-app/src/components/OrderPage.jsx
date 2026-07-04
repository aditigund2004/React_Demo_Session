import React, { useState } from 'react'
import { addAPI } from '../data'

const OrderPage = ({sendOrder}) => {

    const [order, setOrder] = useState({
    'userId': '', 
    'uname': "", 
    "address": "",
    "phone": "",
    "foodType": "",
    "totalQuantity": ""})

    const handelSubmit = (e) =>{
        e.preventDefault()

        setOrder({
        userId: "",
        uname: "",
        address: "",
        phone: "",
        foodType: "",
        totalQuantity: ""
        });

        console.log(order)
        sendOrder(order)
        addAPI(order)
    }
    const handelInput = (e)=>{
        const {name, value} = e.target
        setOrder({...order, [name]:value})
    }

  return (
    <div>
         <form onSubmit={handelSubmit}>

        UserId: <input type='text' name = 'userId' value={order.userId} onChange={handelInput} required/><br></br><br></br>
        name: <input type='text' name = 'uname' value={order.uname} onChange={handelInput} required/><br></br><br></br>
        address: <input type='text' name = 'address' value={order.address} onChange={handelInput} required/><br></br><br></br>
        phone: <input type='text' name = 'phone' value={order.phone} onChange={handelInput} required/><br></br><br></br>
        foodType: <input type='text' name = 'foodType' value={order.foodType} onChange={handelInput} required/><br></br><br></br>
        totalQuantity: <input type='text' name = 'totalQuantity' value={order.totalQuantity} onChange={handelInput} required/><br></br><br></br>
       
        <button type='submit'>Add Order</button>
        </form>
      
    </div>
  )
}

export default OrderPage
