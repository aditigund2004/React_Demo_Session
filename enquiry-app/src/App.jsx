import React, { useState } from 'react'
import EnquiryForm from './components/EnquiryForm'
import ReceriveEnquiry from './components/ReceriveEnquiry'
import Login from './components/Login'
function App() {

  let [da, setDa] = useState([])

   const recei = (d) => {
        setDa([...da, d])
      }

      const receiveDeleteId = (id) => {
        console.log(id)
        const updatelist = da.filter((item) => item.id !==id)

        setDa(updatelist)
      }

      const [active, setActive] = useState(true);
   return (
    <div>
      <center>
        <h1>Enquiry Form</h1>
      </center>



      <EnquiryForm sendData = {recei} />

      <ReceriveEnquiry enquiryList = {da} DeleteId = {receiveDeleteId}/>
      {/* props name in child => DeleteId, function name => receiveDeleteId */}


      <h2>{active ? "user is active" : "user is in-active"}</h2>
      <button onClick={() => setActive(!active)}>
        Click
      </button>


      <Login/>
      
    </div>
  )
}

export default App
