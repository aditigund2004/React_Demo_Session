import React from 'react'

const Data = ({sendName}) => {
  // child to parent data sharing by using function
  // props name sendName -> function
    sendName("child to parent data transfer...")
  return (
    <div>
        <center>
        <button onClick={() => sendName("child to parent data exchange")}>child to parent</button>
        </center>
      
    </div>
  )
}

export default Data
