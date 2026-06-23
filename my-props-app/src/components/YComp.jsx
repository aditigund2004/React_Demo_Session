import React, { useState } from 'react'
import XComp from './XComp'

const YComp = ({data}) => {
    const [inp, setInput] = useState("")
  return (
    <div>

        {/* accepting data */}

        accept: <input type='text' value = {setInput.inp} onChange={(e) => setInput(e.target.value)}/>

        <button onClick={()=> data(inp)}>send</button>


        {/* data is sending from ycomp to xcomp so import xcomp */}
        <XComp/>

      
    </div>
  )
}

export default YComp



/* 


User types in YComp
        ↓
Click send
        ↓
YComp calls data(inp)
        ↓
App receives it (receive)
        ↓
App updates state (info)
        ↓
XComp shows updated value

*/