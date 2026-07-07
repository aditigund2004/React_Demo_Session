import React, { useState } from 'react'
import Login from './components/Login'
import ShowData from './components/ShowData'

const App = () => {
  // console.log(import.meta.env.VITE_UEL_API)

  let [data, setData] = useState(null)

  const receive =(d)=>{
    setData(d)

  }
  return (
    // <div>
    //   <center>
    //     <Login sendData = {receive}/>

    //     <ShowData receiveTo = {setData}/>
    //   </center>
      
    // </div>
    <div>
  <center>
    {!data ? (
      <Login sendData={setData} />
    ) : data.role === "admin" ? (
      <>
        <h2>Welcome Admin</h2>
        <ShowData />
      </>
    ) : (
      <h2>Welcome User</h2>
    )}
  </center>
</div>
  )
}

export default App
