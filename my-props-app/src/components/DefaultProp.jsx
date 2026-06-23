import React, { useState } from 'react'

const DefaultProp = ({name}) => {


  return (
    <div>
      <center>
      <p>Defualt props</p>
      <p>Welcome to my props...{name}</p>
      {/* <p>Welcome to my props...{"guest"}</p> */}
  
        </center>
      
    </div>
  )
}

export default DefaultProp
