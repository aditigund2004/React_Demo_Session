import React, { useState } from 'react'

const LightOnOffComponent = () => {
    const [Light, setLight] = useState('OFF')

    const onbutton = () => {

    }
  return (
    <div>
        <p>Initial state : {Light}</p>

        <button onClick={onbutton}> ON button change state</button>

        <button onClick={offbutton}> OFF button change state</button>
      
    </div>
  )
}

export default LightOnOffComponent
