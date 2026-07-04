import React, { useState } from 'react'
import OrderPage from './components/OrderPage'
import Data from './components/Data'

const App = () => {
  const [data, setData] = useState([])

  const receiveOrder =(dt)=>{
    setData(dt)
  }
  return (
    <div>
      <h1>Food Order App</h1>
      <OrderPage sendOrder ={receiveOrder}/>

      <Data receive = {data}/>
      
    </div>
  )
}

export default App
