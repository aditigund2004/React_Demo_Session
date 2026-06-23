import React, { useState } from 'react'

const MovieTicketCounterComponent = () => {
    const [count, setCount] = useState(0);
  return (
    <div>
        <center>

        <p>MoveTicket Counter : {count}</p>

        <button onClick={() => setCount(count + 1)}>Add ticket</button><br></br><br></br>

        <button onClick={() => setCount(count - 1)}>Remove ticket</button><br></br><br></br>


        <button onClick={() => setCount(count * 0)}>reset </button>

        </center>

      
    </div>
  )
}

export default MovieTicketCounterComponent
