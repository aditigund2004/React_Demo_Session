import React, { useState } from 'react'

const TemperatureControllerComponent = () => {
    const [Temperature, setTemperature] = useState(25);
  return (
    <div>
        <center>
        <p>Initial Temperature : {Temperature}</p>

        <button onClick={() => {setTemperature(Temperature + 1)}}>increase Temperature by 1°C</button><br></br><br></br>

        <button onClick={() => {setTemperature(Temperature - 1)}}>increase Temperature by 1°C</button><br></br><br></br>

        <button onClick={() => {setTemperature(25)}}>reset Temperature back to 25°C</button>
      </center>
    </div>
  )
}

export default TemperatureControllerComponent
